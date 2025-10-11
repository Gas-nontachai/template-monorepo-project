import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { prismaPlugin } from './plugins/prisma';
import productRoutes from './modules/product/product.route';
import orderRoutes from './modules/order/order.route';

export async function buildApp() {
  const app = Fastify({ logger: true });

  await app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['*'],
  });
  await app.register(helmet, { crossOriginResourcePolicy: false });

  await app.register(prismaPlugin);

  app.get('/', async () => ({ status: 'ok' }));
  app.register(productRoutes, { prefix: '/products' });
  app.register(orderRoutes, { prefix: '/orders' });

  return app;
}
