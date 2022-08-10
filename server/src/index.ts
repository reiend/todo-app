import express from 'express';
import dotenv from 'dotenv';

// allow the use of env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// routes
app.get('/api/v1/todos', (req, res) => {
  res.status(200).json({ message: 'list of todos' });
});

app.post('/api/v1/todo', (req, res) => {
  res.status(200).json({ message: 'created todo' });
});

app.put('/api/v1/todo/:id/mark', (req, res) => {
  res.status(200).json({ message: `mark todo ${req.params.id}` });
});

app.delete('/api/v1/todo/:id', (req, res) => {
  res.status(200).json({ message: `deleted todo ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
