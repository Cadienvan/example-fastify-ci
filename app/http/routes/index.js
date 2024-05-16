import helloRoutes from './hello/index.js';
import ordersRoutes from './orders/index.js';
import logsRoutes from './logs/index.js';
import livenessRoutes from './liveness/index.js';
import readinessRoutes from './readiness/index.js';

export async function registerRoutes(app) {
  app.register(helloRoutes);
  app.register(ordersRoutes);
  app.register(logsRoutes);
  app.register(livenessRoutes);
  app.register(readinessRoutes);
}
