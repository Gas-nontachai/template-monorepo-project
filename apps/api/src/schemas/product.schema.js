"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    priceCents: zod_1.z.number().int().nonnegative(),
    sku: zod_1.z.string().optional(),
    stock: zod_1.z.number().int().nonnegative().optional(),
});
exports.updateProductSchema = exports.createProductSchema.partial();
