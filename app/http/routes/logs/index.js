import { db } from '../../db/index.js';

export default async function routes(app) {
  app.get('/logs', async (request, reply) => {
    db.push('http_log', { method: 'GET', path: '/logs', time: new Date() });
    return db.data;
  });
}
