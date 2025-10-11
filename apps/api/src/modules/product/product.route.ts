import { FastifyPluginAsync } from 'fastify';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

const productRoutes: FastifyPluginAsync = async (app) => {
  const service = new ProductService(app.prisma);
  const controller = new ProductController(service);

  app.get('/', controller.list.bind(controller));
  app.get('/:id', controller.get.bind(controller));
  app.post('/', controller.create.bind(controller));
  app.put('/:id', controller.update.bind(controller));
  app.delete('/:id', controller.remove.bind(controller));
};

export default productRoutes;
