import { Response, Request } from 'express';

type ServerCallBackType = (req: Request, res: Response) => void;
interface TodoProps {
  list: ServerCallBackType;
  create: ServerCallBackType;
  getTodo: ServerCallBackType;
  update: ServerCallBackType;
  remove: ServerCallBackType;
}

const Todo: TodoProps = {
  list: (req, res) => {
    res.status(200).json({ message: 'list of todos' });
  },

  create: (req, res) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error('please add name field');
    }
    res.status(200).json({ message: 'created todo' });
  },

  getTodo: (req, res) => {
    res.status(200).json({ message: 'viewing a todo' });
  },

  update: (req, res) => {
    if (!req.body.status) {
      res.status(400);
      throw new Error('please add status field');
    }
    res.status(200).json({ message: 'created todo' });
    res.status(200).json({
      message: `update todo ${req.params.id}`
    });
  },

  remove: (req, res) => {
    res.status(200).json({ message: `deleted todo ${req.params.id}` });
  }
};

export default Todo;
