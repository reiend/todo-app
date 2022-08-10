import { Response, Request } from 'express';

type ServerCallBackType = (req: Request, res: Response) => void;
interface TodoProps {
  list: ServerCallBackType;
  create: ServerCallBackType;
  status: ServerCallBackType;
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

  status: (req, res) => {
    if (!req.body.status) {
      res.status(400);
      throw new Error('please add status field');
    }
    res.status(200).json({ message: 'created todo' });
    res.status(200).json({
      message: `update status todo completed or not ${req.params.id}`
    });
  },

  remove: (req, res) => {
    res.status(200).json({ message: `deleted todo ${req.params.id}` });
  }
};

export default Todo;
