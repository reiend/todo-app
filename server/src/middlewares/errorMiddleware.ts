import { Request, Response } from 'express';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: () => void
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack
  });

  // call next middleware
  next();
};

export default errorHandler;
