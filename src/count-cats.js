const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, elem) => sum + elem.filter(value => value === '^^').length, 0);
};
