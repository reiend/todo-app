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
    try {
      const todos = await TodoModel.find();

      res.status(200).json({ todos });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  createTodo: async (req, res) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error('please add name field');
    }
    try {
      const newTodo = await TodoModel.create(req.body);

      res.status(201).json({ todo: newTodo });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  getTodo: async (req, res) => {
    try {
      const foundTodo = await TodoModel.findOne({ _id: req.params.id });

      if (!foundTodo) {
        return res
          .status(404)
          .json({ message: `No Todo has an id of ${req.params.id}` });
      }

      res.status(200).json({ todo: foundTodo });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  updateTodo: async (req, res) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error('please add name and completed field');
    }

    try {
      const updatedTodo = await TodoModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedTodo) {
        return res
          .status(404)
          .json({ message: `No Todo has an id of ${req.params.id}` });
      }

      res.status(200).json({ todo: updatedTodo });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const deletedTodo = await TodoModel.findOneAndDelete({
        _id: req.params.id
      });

      if (!deletedTodo) {
        return res
          .status(404)
          .json({ message: `No Todo has an id of ${req.params.id}` });
      }

      res.status(200).json({ todo: deletedTodo });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

export default Todo;
