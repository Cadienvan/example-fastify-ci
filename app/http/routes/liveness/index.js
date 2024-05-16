import { db } from '../../db/index.js';

export default async function routes(app) {
  app.get('/liveness', async (request, reply) => {
    db.push('http_log', { method: 'GET', path: '/liveness', time: new Date() });
    return 'OK';
  });
}
