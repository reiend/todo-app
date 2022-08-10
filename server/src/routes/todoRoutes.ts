import express from 'express';
import Todo from '../controllers/todoController';

/* eslint-disable */
const todoRouter = express.Router();
/* eslint-enable */

// routes
todoRouter.get('/todos', Todo.getTodos);
todoRouter.post('/todos', Todo.createTodo);
todoRouter.get('/todos/:id', Todo.getTodo);
todoRouter.put('/todos/:id', Todo.updateTodo);
todoRouter.delete('/todos/:id', Todo.deleteTodo);

export default todoRouter;
