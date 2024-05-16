import swaggerPlugins from './swagger.js';

export async function registerPlugins(fastify) {
  swaggerPlugins(fastify);
}
