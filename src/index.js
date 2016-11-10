import express from 'express';

const app = express();

function sum(a = 0, b = 0) {
  return (Number(a) || 0) + (Number(b) || 0); // Use || to replace NaN
}

app.get('/task2A', (req, res) => {
  res.send(`Вывод: ${sum(req.query.a, req.query.b)}`);
});

app.listen(3000, () => {
  console.log('DEBUG: I\'m alive');
});
