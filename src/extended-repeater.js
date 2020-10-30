const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;      
  const additionStr = addition === undefined
    ? ''
    : repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator});
  
  const arr = Array(repeatTimes);
  return arr
    .fill('' + str + additionStr)
    .join(separator);
};
  