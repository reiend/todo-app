import { Response, Request } from 'express';

const list = (req: Request, res: Response) => {
  res.status(200).json({ message: 'get goals' });
};

const create = (req: Request, res: Response) => {
  res.status(200).json({ message: 'post todo' });
};

const update = (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name field');
  }
  res.status(200).json({ todos: `update todo ${req.params.id}` });
};

const remove = (req: Request, res: Response) => {
  res.status(200).json({ todos: `delete todo ${req.params.id}` });
};

const Todo = {
  list,
  create,
  update,
  remove
};

export default Todo;
