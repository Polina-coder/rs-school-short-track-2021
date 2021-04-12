/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let k = 0;
  const arrs1 = s1.split('');
  const arrs2 = s2.split('');
  for (let i = 0; i < arrs1.length; i++) {
    for (let j = 0; j < arrs2.length; j++) {
      if (arrs1[i] === arrs2[j]) {
        delete arrs2[j];
        k++;
        j = arrs2.length;
      }
    }
  }
  return k;
}

module.exports = getCommonCharacterCount;
