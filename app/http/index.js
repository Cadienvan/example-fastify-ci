import Fastify from 'fastify';
import { registerRoutes } from './routes/index.js';
import { registerPlugins } from './plugins/index.js';

export const fastify = Fastify({
  logger: true
});

registerRoutes(fastify);
registerPlugins(fastify);
