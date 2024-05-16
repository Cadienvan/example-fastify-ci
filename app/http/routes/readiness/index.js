import { db } from '../../db/index.js';

export default async function routes(app) {
  app.get('/readiness', async (request, reply) => {
    db.push('http_log', {
      method: 'GET',
      path: '/readiness',
      time: new Date()
    });
    return 'OK';
  });
}
