const { NotImplementedError } = require('../extensions/index.js');

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
  let obj1 = getCharactersCountFromString(s1);
  let obj2 = getCharactersCountFromString(s2);

  return Object.keys(obj1).reduce((acc, item) => {
    acc += Math.min(obj1[item] || 0, obj2[item] || 0);

    return acc;
  }, 0);
  // remove line with error and write your code here
}

function getCharactersCountFromString(s) {
  let result = {};

  for (let i = 0; i < s.length; i++) {
    if (!result[s[i]]) {
      result[s[i]] = 1;
    } else {
      result[s[i]]++;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
