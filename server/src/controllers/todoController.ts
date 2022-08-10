import { Response, Request } from 'express';
import TodoModel from '../models/todoModel';

type ServerCallBackType = (req: Request, res: Response) => void;
interface TodoProps {
  getTodos: ServerCallBackType;
  createTodo: ServerCallBackType;
  getTodo: ServerCallBackType;
  updateTodo: ServerCallBackType;
  deleteTodo: ServerCallBackType;
}

const Todo: TodoProps = {
  getTodos: (req, res) => {
    res.status(200).json({ message: 'list of todos' });
  },

  createTodo: async (req, res) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error('please add name field');
    }

    const newTodo = await TodoModel.create(req.body);

    res.status(201).json({ todo: newTodo });
  },

  getTodo: (req, res) => {
    res.status(200).json({ message: 'viewing a todo' });
  },

  updateTodo: (req, res) => {
    if (!(req.body.name && req.body.completed)) {
      res.status(400);
      throw new Error('please add name and completed field');
    }

    res.status(200).json({ message: 'updated todo' });
    res.status(200).json({
      message: `update todo ${req.params.id}`
    });
  },

  deleteTodo: (req, res) => {
    res.status(200).json({ message: `deleted todo ${req.params.id}` });
  }
};

export default Todo;
