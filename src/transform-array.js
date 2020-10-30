module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    const action = ['--discard-prev', '--discard-next', '--double-next', '--double-prev'];    
    return arr.reduce((res, item, ind) => {
      if (action.includes(item) || arr[ind - 1] === '--discard-next') {
        return res;
      }
      if (arr[ind - 1] === '--double-next' && arr[ind + 1] === '--discard-prev') {
        return [...res, item];
      }
      if (arr[ind - 1] === '--double-next' && arr[ind + 1] === '--double-prev') {        
        return [...res, item, item, item];
      }
      if (arr[ind - 1] === '--double-next' || arr[ind + 1] === '--double-prev') {        
        return [...res, item, item];
      }    
      if (arr[ind + 1] === '--discard-prev') {
        return res;                
      }      
      return [...res, item];        
    }, []); 
  }

  throw new Error('arr is not an Array');
};
