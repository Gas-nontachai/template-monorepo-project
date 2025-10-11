import { PrismaClient } from '@prisma/client';

export class OrderService {
  constructor(private prisma: PrismaClient) {}

  async list() {
    return this.prisma.order.findMany({ include: { items: true }, orderBy: { createdAt: 'desc' } });
  }

  async create(data: { items: { productId: number; quantity: number }[] }) {
    // Use a transaction to ensure atomicity
  return await this.prisma.$transaction(async (tx: PrismaClient) => {
      const itemsWithPrice = await Promise.all(
        data.items.map(async (it) => {
          const product = await tx.product.findUnique({ where: { id: it.productId } });
          if (!product) throw new Error(`Product not found: ${it.productId}`);
          return { ...it, unitPrice: product.priceCents };
        })
      );

      const totalCents = itemsWithPrice.reduce((s, i) => s + i.unitPrice * i.quantity, 0);

      const order = await tx.order.create({ data: { totalCents } });

      for (const it of itemsWithPrice) {
        await tx.orderItem.create({ data: { orderId: order.id, productId: it.productId, quantity: it.quantity, unitPrice: it.unitPrice } });
      }

      return tx.order.findUnique({ where: { id: order.id }, include: { items: true } });
    });
  }
}
