import { fastify } from './http/index.js';

console.log('Waiting for connections...');
await Promise.all([fastify.listen({ host: '0.0.0.0', port: 3000 })]);
console.log('Connections established!');
