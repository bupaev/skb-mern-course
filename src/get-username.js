/**
 * Extract username from url. Task 2C
 *
 * @param {string} url
 * @returns {string}
 */
function getUsername(url) {
  if (!url) { return ''; }

  const urlWithoutProtocol = url.split('//')[1] || url;
  const urlWithoutParameters = urlWithoutProtocol.split('?')[0];
  const urlMainParts = urlWithoutParameters.split('/');
  const username = urlMainParts[1] || urlMainParts[0];

  if (username.charAt(0) !== '@') {
    return '@' + username;
  }

  return username;
}

module.exports = getUsername;