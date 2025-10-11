"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaPlugin = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prismaPlugin = (0, fastify_plugin_1.default)(async (app) => {
    app.decorate('prisma', prisma);
    app.addHook('onClose', async () => {
        await prisma.$disconnect();
    });
});
