import express from 'express';

/* eslint-disable */
const todoRouter = express.Router();
/* eslint-enable */

// routes
todoRouter.get('/todos', (req, res) => {
  res.status(200).json({ message: 'list of todos' });
});

todoRouter.post('/todo', (req, res) => {
  res.status(200).json({ message: 'created todo' });
});

todoRouter.put('/todo/:id/mark', (req, res) => {
  res.status(200).json({ message: `mark todo ${req.params.id}` });
});

todoRouter.delete('/todo/:id', (req, res) => {
  res.status(200).json({ message: `deleted todo ${req.params.id}` });
});

export default todoRouter;
