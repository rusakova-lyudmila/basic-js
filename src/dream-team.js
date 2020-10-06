const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.length > 0) {
    return members.filter(item => typeof item === 'string')
      .map(item => item.trim().slice(0, 1).toUpperCase())
      .sort().join('');
  }
  
  return false;
};
