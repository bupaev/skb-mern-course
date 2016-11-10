import express from 'express';

const app = express();

function sum(a = 0, b = 0) {
  return (Number(a) || 0) + (Number(b) || 0); // Use || to replace NaN
}

function getInitials(fullname) {
  const words = fullname.trim().split(/\s+/);

  if (words.length > 3) {
    return 'Invalid fullname';
  }

  return words.splice(0, words.length - 1).reduce(function(a, b) {
    return a + b[0] + '. ';
  }, words[0] + ' ');
}

app.get('/task2A', (req, res) => {
  res.send(`Вывод: ${sum(req.query.a, req.query.b)}`);
});

app.get('/task2B', (req, res) => {
  res.send(getInitials(req.query.fullname));
});

app.listen(3000, () => {
  console.log('DEBUG: I\'m alive');
});
