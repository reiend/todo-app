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
    res.status(200).json({ message: 'created todo' });
  },

  status: (req, res) => {
    res.status(200).json({
      message: `update status todo completed or not ${req.params.id}`
    });
  },

  remove: (req, res) => {
    res.status(200).json({ message: `deleted todo ${req.params.id}` });
  }
};

export default Todo;
