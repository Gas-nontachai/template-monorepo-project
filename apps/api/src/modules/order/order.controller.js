"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_schema_1 = require("../../schemas/order.schema");
const zod_1 = require("zod");
class OrderController {
    constructor(service) {
        this.service = service;
    }
    async list(_req, reply) {
        const items = await this.service.list();
        return reply.send(items);
    }
    async create(req, reply) {
        const body = req.body;
        try {
            const parsed = order_schema_1.createOrderSchema.parse(body);
            const created = await this.service.create(parsed);
            return reply.status(201).send(created);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError)
                return reply.status(422).send({ error: 'Validation failed', details: err.issues });
            return reply.status(400).send({ error: err.message || 'Invalid input' });
        }
    }
}
exports.OrderController = OrderController;
