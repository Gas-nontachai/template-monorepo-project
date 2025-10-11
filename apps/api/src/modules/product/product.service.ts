import { PrismaClient } from '@prisma/client';

export class ProductService {
  constructor(private prisma: PrismaClient) {}

  async list() {
    return this.prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async get(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(data: { name: string; description?: string; priceCents: number; sku?: string; stock?: number }) {
    return this.prisma.product.create({ data });
  }

  async update(id: number, data: { name?: string; description?: string; priceCents?: number; sku?: string; stock?: number }) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
