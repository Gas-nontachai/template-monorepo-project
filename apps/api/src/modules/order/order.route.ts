import { FastifyPluginAsync } from 'fastify';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

const orderRoutes: FastifyPluginAsync = async (app) => {
  const service = new OrderService(app.prisma);
  const controller = new OrderController(service);

  app.get('/', controller.list.bind(controller));
  app.post('/', controller.create.bind(controller));
};

export default orderRoutes;
