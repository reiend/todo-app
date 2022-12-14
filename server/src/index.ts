import express from 'express';
import mongodb from './db/mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
import errorHandler from './middlewares/errorMiddleware';
import notFoundHandler from './middlewares/notFoundMiddleware';

// allow the use of env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: '*'
  })
);

// allow to read and write on request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/v1', router.todoRouter);

// override default express error handler
// catch invalid routes
app.use(errorHandler);
app.use(notFoundHandler);

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
