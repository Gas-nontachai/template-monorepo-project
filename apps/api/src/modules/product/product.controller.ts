import { FastifyReply, FastifyRequest } from 'fastify';
import { ProductService } from './product.service';
import { createProductSchema, updateProductSchema, CreateProductInput, UpdateProductInput } from '../../schemas/product.schema';
import { ZodError } from 'zod';

export class ProductController {
  constructor(private service: ProductService) {}

  async list(_req: FastifyRequest, reply: FastifyReply) {
    const items = await this.service.list();
    return reply.send(items);
  }

  async get(req: FastifyRequest, reply: FastifyReply) {
    const id = Number((req.params as any).id);
    const item = await this.service.get(id);
    if (!item) return reply.status(404).send({ error: 'Not found' });
    return reply.send(item);
  }

  async create(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as unknown;
    try {
      const parsed = createProductSchema.parse(body) as CreateProductInput;
      const created = await this.service.create(parsed as any);
      return reply.status(201).send(created);
    } catch (err) {
  if (err instanceof ZodError) return reply.status(422).send({ error: 'Validation failed', details: err.issues });
      return reply.status(400).send({ error: 'Invalid input' });
    }
  }

  async update(req: FastifyRequest, reply: FastifyReply) {
    const id = Number((req.params as any).id);
    const body = req.body as unknown;
    try {
      const parsed = updateProductSchema.parse(body) as UpdateProductInput;
      const updated = await this.service.update(id, parsed as any);
      return reply.send(updated);
    } catch (err) {
  if (err instanceof ZodError) return reply.status(422).send({ error: 'Validation failed', details: err.issues });
      return reply.status(400).send({ error: 'Invalid input or not found' });
    }
  }

  async remove(req: FastifyRequest, reply: FastifyReply) {
    const id = Number((req.params as any).id);
    try {
      await this.service.delete(id);
      return reply.send({ deleted: true });
    } catch (err) {
      return reply.status(400).send({ error: 'Invalid id or not found' });
    }
  }
}
