import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from './routes';
import errorHandler from './middleware/errorMiddleware';

// allow to use the env file
dotenv.config();

interface ServerProps {
  app: Express;
  initialize: () => void;
}

type ServerType = (port?: string | number) => ServerProps;

const server: ServerType = (port = process.env.PORT || 5000) => {
  const app = express();

  // run the server
  const initialize = () => {
    // for reading the request body
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // routes
    app.use('/api/v1/', router.todoRouter);

    // override the default express error handler
    app.use(errorHandler);

    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  };

  return {
    app,
    initialize
  };
};

const server1 = server();
server1.initialize();

export { server1 };
