/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newstr = str.split('');
  const arr = [];
  let count = 1;
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[i] === newstr[i + 1]) {
      count++;
    } else {
      if (count !== 1) {
        arr.push(count);
      }
      arr.push(newstr[i]);
      count = 1;
    }
  }

  return arr.join('');
}

module.exports = encodeLine;
