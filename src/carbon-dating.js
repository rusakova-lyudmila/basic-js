const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    const isString = typeof sampleActivity === 'string';
    sampleActivity = +sampleActivity;
    const isValidValue = !isNaN(sampleActivity) && sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY;
    return (isString && isValidValue) 
      ? (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693 
      : false;
};