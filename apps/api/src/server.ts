import { buildApp } from './app';
import { env } from './config/env';

const start = async () => {
  const app = await buildApp();
  try {
    await app.listen({ port: env.API_PORT, host: '0.0.0.0' });
    app.log.info(`🚀 Server ready at http://localhost:${env.API_PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
