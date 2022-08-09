import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
let test = 'qrq';
test = 5;

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
