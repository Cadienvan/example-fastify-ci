import { fastify } from './http/index.js';

console.log('Waiting for connections...');
await Promise.all([fastify.listen({ port: 3000 })]);
console.log('Connections established!');
