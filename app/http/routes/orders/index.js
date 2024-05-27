import { generate, parse, verify } from '../../../utils/lockKeys.js';
import { db } from '../../db/index.js';

export default async function routes(app) {
  app.post(
    '/orders/lock',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            userId: { type: 'number' },
            productId: { type: 'number' },
            quantity: { type: 'number' }
          },
          required: ['userId', 'productId']
        },
        response: {
          200: {
            type: 'object',
            properties: {
              orderId: { type: 'number' }
            }
          },
          400: {
            type: 'object',
            properties: {
              error: { type: 'string' },
              message: { type: 'string' }
            }
          }
        }
      }
    },
    async (request, reply) => {
      db.push('http_log', {
        method: 'POST',
        path: '/orders/lock',
        time: new Date()
      });
      const { userId, productId } = request.body;
      const quantity = request.body.quantity || 1;
      return generate({ userId, productId, quantity });
    }
  );

  app.post(
    '/orders/placement',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            lockKey: { type: 'string' },
            userId: { type: 'number' },
            productId: { type: 'number' },
            quantity: { type: 'number' }
          },
          required: ['lockKey', 'userId', 'productId']
        },
        response: {
          200: {
            type: 'object',
            properties: {
              orderId: { type: 'number' },
              orderLockKey: { type: 'string' },
              amount: { type: 'number' }
            }
          },
          400: {
            type: 'object',
            properties: {
              error: { type: 'string' },
              message: { type: 'string' }
            }
          },
          409: {
            type: 'object',
            properties: {
              error: { type: 'string' }
            }
          }
        }
      }
    },
    async (request, reply) => {
      console.log('prova1-1');
      db.push('http_log', {
        method: 'POST',
        path: '/orders/payments',
        time: new Date()
      });
      const { userId, productId } = request.body;
      const quantity = request.body.quantity || 1;

      const orderId = generate({ userId, productId, quantity });
      // Verifying Lock Key
      if (!verify(request.body.lockKey, orderId)) {
        reply.code(409);
        return { error: 'Invalid lock key' };
      }

      // Verifying Order Uniqueness
      const existingOrder = db.get(`orders_${orderId}`);
      if (existingOrder) {
        reply.code(409);
        return { error: 'Order already exists' };
      }

      // Creating Order
      db.set(`orders_${orderId}`, { userId, productId, quantity });
      return { orderId };
    }
  );
}
