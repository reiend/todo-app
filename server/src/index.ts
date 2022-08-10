import express from 'express';
import dotenv from 'dotenv';

// allow the use of env file
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
