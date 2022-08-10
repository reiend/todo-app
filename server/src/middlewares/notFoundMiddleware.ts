import { Request, Response } from 'express';

const notFoundHandler = (req: Request, res: Response) =>
  res.status(404).json({ message: "Route does't exist" });

export default notFoundHandler;
