"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list() {
        return this.prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async get(id) {
        return this.prisma.product.findUnique({ where: { id } });
    }
    async create(data) {
        return this.prisma.product.create({ data });
    }
    async update(id, data) {
        return this.prisma.product.update({ where: { id }, data });
    }
    async delete(id) {
        return this.prisma.product.delete({ where: { id } });
    }
}
exports.ProductService = ProductService;
