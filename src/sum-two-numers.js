/**
 * Sum two number. Task 2A
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sumTwoNumbers(a, b) {
  return (Number(a) || 0) + (Number(b) || 0); // Use || to replace NaN
}

module.exports = sumTwoNumbers;