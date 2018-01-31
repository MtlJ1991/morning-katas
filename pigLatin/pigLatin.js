// Please do not change the name of this function
var pigLatin = function (str) {
  let regex = /[aeiou]/gi;
  
  let result = str.split(' ').map((element) => {
    if (element[0].match(regex)) return element + 'way';
  
    else {let vowelIndice = element.indexOf(element.match(regex)[0]);
     return element.substr(vowelIndice) + element.substr(0, vowelIndice) + 'ay';
    } 
  }).join(' ');
  return result;
  };
  
  
  if (typeof module !== 'undefined') {
    module.exports = {pigLatin};
  }