import { Response, Request } from 'express';
import TodoModel from '../models/todoModel';
import asyncHandler from 'express-async-handler';

const list = asyncHandler(async (req: Request, res: Response) => {
  const todos = await TodoModel.find();

  res.status(200).json({ todos });
});

const create = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name field');
  }

  const todo = await TodoModel.create({ name: req.body.name });
  res.status(200).json(todo);
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const todo = await TodoModel.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  const updatedTodo = await TodoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTodo);
});

const remove = async (req: Request, res: Response) => {
  const todo = await TodoModel.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not Found');
  }

  const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedTodo);
};

const Todo = {
  list,
  create,
  update,
  remove
};

export default Todo;
