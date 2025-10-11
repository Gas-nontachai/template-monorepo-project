"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const helmet_1 = __importDefault(require("@fastify/helmet"));
const prisma_1 = require("./plugins/prisma");
const product_route_1 = __importDefault(require("./modules/product/product.route"));
const order_route_1 = __importDefault(require("./modules/order/order.route"));
async function buildApp() {
    const app = (0, fastify_1.default)({ logger: true });
    await app.register(cors_1.default, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['*'],
    });
    await app.register(helmet_1.default, { crossOriginResourcePolicy: false });
    await app.register(prisma_1.prismaPlugin);
    app.get('/', async () => ({ status: 'ok' }));
    app.register(product_route_1.default, { prefix: '/products' });
    app.register(order_route_1.default, { prefix: '/orders' });
    return app;
}
