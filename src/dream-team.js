const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  /*if (members && members.length > 0) {
    let namesFirstLetters = members.reduce((dreamTeam, item) => {
      if (typeof item === 'string') {
        dreamTeam += item.trim().slice(0, 1).toUpperCase();
      }
      return dreamTeam;
    }, '');
    return namesFirstLetters.split('').sort().join('');
  } else {
    return false;
  }*/

  if (members && members.length > 0) {
    return members.filter(item => typeof item === 'string')
      .map(item => item.trim().slice(0, 1).toUpperCase())
      .sort().join('');
  } else {
    return false;
  }
};
