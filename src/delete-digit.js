const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str_n = String(n).split('');
  let min = str_n[0];
  let max = 0;
  for (let i = 0; i < str_n.length; i++){
    str_n2 = str_n.splice(i, 1);
    if (Number(str_n.join('')) > max){
      max = Number(str_n.join(''));
    }
    str_n2 = str_n2.join('');
    str_n.splice(i, 0, str_n2);
  }
  return max;
}

module.exports = {
  deleteDigit
};
