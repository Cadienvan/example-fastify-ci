import { db } from '../../db/index.js';

export default async function routes(app) {
  app.get('/hello', async (request, reply) => {
    db.push('http_log', { method: 'GET', path: '/hello', time: new Date() });
    return { hello: 'world' };
  });
}
