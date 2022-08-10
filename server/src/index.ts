import express from 'express';
import dotenv from 'dotenv';
import router from './routes';

// allow the use of env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use('/api/v1', router.todoRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
