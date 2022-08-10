import request from 'supertest';
import { server1 } from '../src';

describe('todos', () => {
  describe('Get', () => {
    describe('/api/v1/todos', () => {
      it('should return either an empty array or array of todo', async () => {
        await request(server1.app).get('/api/v1/todos').expect(200);
      });
    });
  });
});
