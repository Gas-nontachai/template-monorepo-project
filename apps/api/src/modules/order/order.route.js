"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const orderRoutes = async (app) => {
    const service = new order_service_1.OrderService(app.prisma);
    const controller = new order_controller_1.OrderController(service);
    app.get('/', controller.list.bind(controller));
    app.post('/', controller.create.bind(controller));
};
exports.default = orderRoutes;
