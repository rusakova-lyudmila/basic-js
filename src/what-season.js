const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seazons = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter',
  }

  if (date) {
    const testDate = new Date(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

    if (date.toString() === testDate.toString()) {
      return seazons[date.getMonth()];
    }
    
    throw new CustomError("THROWN");
  }

  return 'Unable to determine the time of year!';
};
