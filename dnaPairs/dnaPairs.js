// Please do not change the name of this function
var dnaPairs = function (dna) {
  
	const pairs = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C'
  }

  let result = [];
  dna.forEach(letter => {
    if (pairs[letter]) result.push([letter, pairs[letter]])
  })

};

if (typeof module !== 'undefined') {
  module.exports = {dnaPairs};
}
