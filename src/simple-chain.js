const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === '') {
      this.links.push('( )');  
    } else {
      this.links.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    const isInvalidPosition = isNaN(+position) ||
      position > this.links.length ||
      position < 1;
    if (isInvalidPosition) {
      this.links = [];
      throw new CustomError('Invalid position');
    }
    this.links.splice(position - 1 , 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = this.links.join('~~');    
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;
