/**
 * Convert full name to family name with initials. Task 2B
 *
 * @param {string} fullName
 * @returns {string}
 */
function getInitials(fullName) {

  // Empty name, digits and special characters is not allowed
  if (!fullName || /[\d$&+,:;=?@#|/<>.^*()%!_]/i.test(fullName)) {
    return 'Invalid fullname';
  }

  const words = fullName
    .trim()
    .split(/ +/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

  if (words.length > 3) {
    return 'Invalid fullName';
  }

  return words.splice(0, words.length - 1).reduce(function(a, b) {
    return a + ' ' + b.charAt(0) + '.';
  }, words[0]);
}

module.exports = getInitials;