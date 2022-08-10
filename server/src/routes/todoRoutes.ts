import express from 'express';
import Todo from '../controller/todoController';

/* eslint-disable*/
const todoRouter = express.Router();
/* eslint-enable*/

todoRouter.get('/todos', Todo.list);
todoRouter.post('/todo', Todo.create);
todoRouter.route('/todo/:id').put(Todo.update).delete(Todo.remove);

export default todoRouter;
