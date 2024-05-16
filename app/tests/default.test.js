import { describe, before, after, it } from 'node:test';
import { equal } from 'node:assert';
import { fastify } from '../http/index.js';

describe('Liveness and Readiness', () => {
  before(async () => {
    await fastify.listen({ port: 3999 });
  });
  it('should return "OK" on liveness endpoint', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/liveness'
    });
    equal(response.statusCode, 200);
    equal(response.body, 'OK');
  });

  it('should return "OK" on readiness endpoint', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/readiness'
    });
    equal(response.statusCode, 200);
    equal(response.body, 'OK');
  });

  after(async () => {
    await fastify.close();
  });
});
