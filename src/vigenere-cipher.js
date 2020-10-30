function converStrToNumbers(str) {
  const aCode = 'A'.charCodeAt(0);
  return str.toUpperCase().split('').map(item => item.charCodeAt(0) - aCode);
}

function converNumbersToStr(arr) {
  const aCode = 'A'.charCodeAt(0);
  return String.fromCharCode(...arr.map(item => item + aCode));  
}

function verification(message, key) {
  if (message === undefined || key === undefined) {
    throw new Error('Error');
  }
}

function getKeyArr(messageArr, key) {
  const keyArr = converStrToNumbers(key);
  const keyLength = key.length;  
  let keyInd = 0;
  return messageArr.map(item => {
    if (item < 0 || item > 25) {
      return 0;          
    } 
    keyInd += 1;
    return keyArr[(keyInd - 1)  % keyLength];      
  });
}
class VigenereCipheringMachine {  
  isDirect = true;
  constructor (isDirect = true) {   
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    verification(message, key);    

    const messageArr = converStrToNumbers(message); 
    const keyArr = getKeyArr(messageArr, key);
    if (!this.isDirect) {
      messageArr.reverse()
    }
    const resArr = messageArr.map((item, ind) => (item < 0 || item > 25) ? item : (item + keyArr[ind]) % 26);
    return converNumbersToStr(resArr);
  }    
  decrypt(encryptedMessage, key) {    
    verification(encryptedMessage, key);

    const encryptedMessageArr = converStrToNumbers(encryptedMessage); 
    const keyArr = getKeyArr(encryptedMessageArr, key);
        
    if (!this.isDirect) {
      encryptedMessageArr.reverse()
    }
    const resArr = encryptedMessageArr.map((item, ind) => (item < 0 || item > 25) ? item : (item + 26 - keyArr[ind]) % 26);
    return converNumbersToStr(resArr);
  }
}


module.exports = VigenereCipheringMachine;
