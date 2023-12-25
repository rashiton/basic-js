const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1 ) {
    if (arr.length === 0) return depth;
    let maxDepth = 1
    for(let i = 0; i < arr.length; i++)
      if(typeof arr[i] === 'object')
        maxDepth = Math.max(this.calculateDepth(arr[i], depth + 1), maxDepth);
        else
        maxDepth = Math.max(depth, maxDepth);
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
