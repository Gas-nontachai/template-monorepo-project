"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const productRoutes = async (app) => {
    const service = new product_service_1.ProductService(app.prisma);
    const controller = new product_controller_1.ProductController(service);
    app.get('/', controller.list.bind(controller));
    app.get('/:id', controller.get.bind(controller));
    app.post('/', controller.create.bind(controller));
    app.put('/:id', controller.update.bind(controller));
    app.delete('/:id', controller.remove.bind(controller));
};
exports.default = productRoutes;
