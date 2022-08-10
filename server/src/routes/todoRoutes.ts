import express from 'express';
import Todo from '../controllers/todoController';

/* eslint-disable */
const todoRouter = express.Router();
/* eslint-enable */

// routes
todoRouter.get('/todos', Todo.getTodos);
todoRouter.post('/todo', Todo.createTodo);
todoRouter.get('/todo/:id', Todo.getTodo);
todoRouter.put('/todo/:id', Todo.updateTodo);
todoRouter.delete('/todo/:id', Todo.deleteTodo);

export default todoRouter;
