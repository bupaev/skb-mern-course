import express from 'express';
import cors from 'cors';

import sumTwoNumbers from './sum-two-numers';
import getInitials from './get-initals';
import getUsername from './get-username';
import fetchPc from './fetch-pc-config';
import getPcData from './get-pc-data';

const app = express();
app.use(cors());
app.listen(3000, () => {
  console.log('DEBUG: I\'m alive');
});

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

let PcData;
fetchPc().then((res) => {
  PcData = res;
});

app.get('/task3A/\*', (req, res) => {
  const paramsString = req.params['0'];
  const data = getPcData(PcData, paramsString);

  if (data === void 0) {
    return res.status(404).send('Not Found');
  }
  return res.json(data);
});
