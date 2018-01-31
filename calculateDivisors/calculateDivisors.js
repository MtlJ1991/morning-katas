var calculateDivisors = function (number) {
  if (number < 3) return 0;
  
  let divisorsOfNumber = 0;
  
  for (let i = 0; i < number; i ++) {
    if (i % 3 === 0 || i % 5 === 0) divisorsOfNumber += i;
  }
  return divisorsOfNumber;

  
  };
  
  if (typeof module !== 'undefined') {
    module.exports = {calculateDivisors};
  }