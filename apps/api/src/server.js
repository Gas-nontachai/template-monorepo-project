"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const start = async () => {
    const app = await (0, app_1.buildApp)();
    try {
        await app.listen({ port: env_1.env.API_PORT, host: '0.0.0.0' });
        app.log.info(`🚀 Server ready at http://localhost:${env_1.env.API_PORT}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
