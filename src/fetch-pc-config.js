import fetch from 'isomorphic-fetch';

function getPc() {
  const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

  return fetch(pcUrl)
    .then(async res => await res.json())
    .catch((err) => {
      console.log('Something went wrong:', err);
    });
}

module.exports = getPc;
