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
  getTodos: async (req, res) => {
    const todos = await TodoModel.find();

    res.status(200).json({ todos });
  },

  createTodo: async (req, res) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error('please add name field');
    }

    const newTodo = await TodoModel.create(req.body);

    res.status(201).json({ todo: newTodo });
  },

  getTodo: async (req, res) => {
    const foundTodo = await TodoModel.findOne({ _id: req.params.id });
    res.status(200).json({ todo: foundTodo });
  },

  updateTodo: async (req, res) => {
    if (!(req.body.name && req.body.completed)) {
      res.status(400);
      throw new Error('please add name and completed field');
    }

    const updatedTodo = await TodoModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({ todo: updatedTodo });
  },

  deleteTodo: async (req, res) => {
    const deletedTodo = await TodoModel.findOneAndDelete({
      _id: req.params.id
    });

    res.status(200).json({ todo: deletedTodo });
  }
};

export default Todo;
