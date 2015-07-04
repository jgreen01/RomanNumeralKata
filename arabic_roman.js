var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var roman = ['M','D','C','L','X','V','I'];

  var result = a2r(input,1000,roman);
  console.log('result: ' + result);

  return result;

  function a2r(num,base,symbols){

    var output = '';

    console.log('symbol_arr: ' + symbols.toString() + ' base: ' + base + ' num: ' + num);

    if(num/base >= 1) { // add 10^?s ie repeatable numberals
      output += repeatableNumerals(Math.floor(num/base),symbols[0]); // XXX
      num -= Math.floor(num/base)*base; // the remainder of num/base
    }

    if(num%5*(base/10) === 4) {
      if(num%base === 9) {
        output += symbols[2] + symbols[0]; // IX
        num -= 9*(base/10); // ?right?
      } else {
        output += symbols[2] + symbols[1]; // IV
        num -= 4*(base/10); // ?right?
      }
    }

    if(num/(5*(base/10)) >= 1) { // add fives ie single numerals
      output += symbols[1]; // V
      num -= 5*(base/10);
    }

    console.log('output: ' + output + ' num: ' + num);

    if(num !== 0){
      symbols.shift(); symbols.shift();
      output += a2r(num,base/10,symbols);
    }

    return output;
  }

  function repeatableNumerals(num,symbol){
    var output = '';

    for( var i = 0; i < num; i++)
      output += symbol;

    return output;
  }
}

module.exports = AR;
