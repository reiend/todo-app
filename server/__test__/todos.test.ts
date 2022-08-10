import request from 'supertest';
import { app } from '../src';

describe('todos', () => {
  beforeAll(done => {
    done();
  });

  describe('get todos route', () => {
    describe('if there are todos', () => {
      it('should return a 200', async () => {
        await request(app)
          .get('/api/v1/todos')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(response => {
            expect(response.body).toEqual(
              expect.arrayContaining([
                expect.objectContaining({
                  name: expect.any(String),
                  completed: expect.any(Boolean)
                })
              ])
            );
          });
      });
    });
  });
});
