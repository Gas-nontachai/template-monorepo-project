"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_schema_1 = require("../../schemas/product.schema");
const zod_1 = require("zod");
class ProductController {
    constructor(service) {
        this.service = service;
    }
    async list(_req, reply) {
        const items = await this.service.list();
        return reply.send(items);
    }
    async get(req, reply) {
        const id = Number(req.params.id);
        const item = await this.service.get(id);
        if (!item)
            return reply.status(404).send({ error: 'Not found' });
        return reply.send(item);
    }
    async create(req, reply) {
        const body = req.body;
        try {
            const parsed = product_schema_1.createProductSchema.parse(body);
            const created = await this.service.create(parsed);
            return reply.status(201).send(created);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError)
                return reply.status(422).send({ error: 'Validation failed', details: err.issues });
            return reply.status(400).send({ error: 'Invalid input' });
        }
    }
    async update(req, reply) {
        const id = Number(req.params.id);
        const body = req.body;
        try {
            const parsed = product_schema_1.updateProductSchema.parse(body);
            const updated = await this.service.update(id, parsed);
            return reply.send(updated);
        }
        catch (err) {
            if (err instanceof zod_1.ZodError)
                return reply.status(422).send({ error: 'Validation failed', details: err.issues });
            return reply.status(400).send({ error: 'Invalid input or not found' });
        }
    }
    async remove(req, reply) {
        const id = Number(req.params.id);
        try {
            await this.service.delete(id);
            return reply.send({ deleted: true });
        }
        catch (err) {
            return reply.status(400).send({ error: 'Invalid id or not found' });
        }
    }
}
exports.ProductController = ProductController;
