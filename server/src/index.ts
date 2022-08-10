import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

// allow the use of env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// allow to read and write on request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/v1', router.todoRouter);

// run server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
