import express from 'express';
import Todo from '../controllers/todoController';

/* eslint-disable */
const todoRouter = express.Router();
/* eslint-enable */

// routes
todoRouter.get('/todos', Todo.list);
todoRouter.post('/todo', Todo.create);
todoRouter.get('/todo/:id', Todo.getOne);
todoRouter.put('/todo/:id', Todo.update);
todoRouter.delete('/todo/:id', Todo.remove);

export default todoRouter;
