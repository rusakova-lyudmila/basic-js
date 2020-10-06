const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = Math.pow(2, disksNumber) - 1;
  const secondsCount = Math.floor(turnsCount * 3600 / turnsSpeed);
  
  return {turns: turnsCount, seconds: secondsCount};
};
