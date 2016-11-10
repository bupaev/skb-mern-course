import express from 'express';
import cors from 'cors';

import sumTwoNumbers from './sum-two-numers';
import getInitials from './get-initals';
import getUsername from './get-username';

const app = express();
app.use(cors());

app.get('/task2A', (req, res) => {
  const result = sumTwoNumbers(req.query.a, req.query.b).toString();
  res.send(result);
});

app.get('/task2B', (req, res) => {
  res.send(getInitials(req.query.fullname));
});

app.get('/task2C', (req, res) => {
  res.send(getUsername(req.query.username));
});

app.listen(3000, () => {
  console.log('DEBUG: I\'m alive');
});
