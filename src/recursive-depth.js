const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const depth = arr.map(item => {
      if (Array.isArray(item)) {
        return 1 + this.calculateDepth(item);
      }
      return 1;
    });
    return Math.max(1, ...depth);
  }
};