import { FastifyReply, FastifyRequest } from 'fastify';
import { OrderService } from './order.service';
import { createOrderSchema, CreateOrderInput } from '../../schemas/order.schema';
import { ZodError } from 'zod';

export class OrderController {
  constructor(private service: OrderService) {}

  async list(_req: FastifyRequest, reply: FastifyReply) {
    const items = await this.service.list();
    return reply.send(items);
  }

  async create(req: FastifyRequest, reply: FastifyReply) {
    const body = req.body as unknown;
    try {
      const parsed = createOrderSchema.parse(body) as CreateOrderInput;
      const created = await this.service.create(parsed);
      return reply.status(201).send(created);
    } catch (err: any) {
      if (err instanceof ZodError) return reply.status(422).send({ error: 'Validation failed', details: err.issues });
      return reply.status(400).send({ error: err.message || 'Invalid input' });
    }
  }
}
