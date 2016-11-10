import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function sum(a = 0, b = 0) {
  return (Number(a) || 0) + (Number(b) || 0); // Use || to replace NaN
}

function getInitials(fullname) {

  // Empty name, digits and special characters is not allowed
  if (!fullname || /[\d$&+,:;=?@#|/<>.^*()%!_]/i.test(fullname)) {
    return 'Invalid fullname';
  }

  const words = fullname
    .trim()
    .toLowerCase()
    .split(/ +/)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });

  if (words.length > 3) {
    return 'Invalid fullname';
  }

  return words.splice(0, words.length - 1).reduce(function(a, b) {
    return a + ' ' + b[0] + '.';
  }, words[0]);
}

app.get('/task2A', (req, res) => {
  const result = sum(req.query.a, req.query.b).toString();
  res.send(result);
});

app.get('/task2B', (req, res) => {
  res.send(getInitials(req.query.fullname));
});

app.listen(3000, () => {
  console.log('DEBUG: I\'m alive');
});
