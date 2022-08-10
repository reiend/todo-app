import express from 'express';
import mongodb from './db/mongodb';
import dotenv from 'dotenv';
import router from './routes';
import errorHandler from './middlewares/errorMiddleware';

// allow the use of env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// allow to read and write on request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/v1', router.todoRouter);

// override default express error handler
app.use(errorHandler);

const initialize = async () => {
  try {
    const mongo = await mongodb(process.env.MONGO_URL as string);
    console.log(`MongoDB connected ${mongo.connection.host}`);

    // run server
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    // halt the process
    process.exit(1);
  }
};

initialize();
