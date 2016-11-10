import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

/**
 * Sum two number. Task 2A
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a = 0, b = 0) {
  return (Number(a) || 0) + (Number(b) || 0); // Use || to replace NaN
}

/**
 * Convert full name to family name with initials. Task 2B
 *
 * @param {string} fullname
 * @returns {string}
 */
function getInitials(fullname) {

  // Empty name, digits and special characters is not allowed
  if (!fullname || /[\d$&+,:;=?@#|/<>.^*()%!_]/i.test(fullname)) {
    return 'Invalid fullname';
  }

  const words = fullname
    .trim()
    .split(/ +/)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

  if (words.length > 3) {
    return 'Invalid fullname';
  }

  return words.splice(0, words.length - 1).reduce(function(a, b) {
    return a + ' ' + b[0] + '.';
  }, words[0]);
}

/**
 * Extract username from url. Task 2C
 *
 * @param {string} url
 * @returns {string}
 */
function getUsername(url) {
  if (!url) { return ''; }

  const parts = url
    .trim()
    .split('/')
    .filter((part) => {
      return part != '';
    });

  const hasProtocol = ['http:', 'https:'].indexOf(parts[0]) > -1;
  let namePart;

  if (parts.length === 1) {
    namePart = parts[0]
  } else if (hasProtocol && parts.length > 2) {
    namePart = parts[2];
  } else if (!hasProtocol) {
    namePart = parts[1];
  } else {
    return '';
  }

  const questionMarkPosition = namePart.indexOf('?');

  let nickname = namePart;
  if (questionMarkPosition != -1) {
    nickname = nickname.substr(0, questionMarkPosition);
  }

  if (nickname.charAt(0) !== '@') {
    nickname = '@' + nickname;
  }

  return nickname;
}

app.get('/task2A', (req, res) => {
  const result = sum(req.query.a, req.query.b).toString();
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
