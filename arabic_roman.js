var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';


  var roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','XC','XD','D','CM','XM','M'];



  function doit(num,base,symbol){

    var output = '';

    if(num/base > 1) { // add 10^?s ie repeatable numberals
      output += repeatableNumerals(Math.floor(num/base),symbol[0]); // XXX
      num -= Math.floor(num/base)*base; // the remainder of num/base
      //symbol.pop(); // or w/e
    }

    if(num/(5*(base/10)) > 1) { // add fives ie single numerals
      output += symbol[1]; // V
      num -= 5*(base/10);
    }

    if(num%5*(base/10) === 4) {
      if(num%base === 9) {
        output += symbol[2] + symbol[0]; // IX
        num -= 9*(base/10); // ?right?
      } else {
        output += symbol[2] + symbol[1]; // IV
        num -= 4*(base/10); // ?right?
      }
    }

    if(num !== 0){
      result += doit(num,base/10,symbol);
    } else {
      return result;
    }
  }




  result += underForty(input);

  return result;

  function add_ones(num){
    return repeatableNumerals(num,one_roman);
  }

  function add_tens(num){
    return repeatableNumerals(num,ten_roman);
  }

  function underNine(num){
    var output = '';

    if(num%5 === 4)
      output += 'IV';
    else if (num/5 === Math.floor(num/5))
      output += 'V';
    else if (num/5 > 1){
      output += 'V';
      output += add_ones(num%5);
    }
    else
      output += add_ones(num%5);

    return output;
  }

  function underForty(num) {
    var output = '';

    if (num/10 === Math.floor(num/10))
      output += add_tens(Math.floor(num/10));
    else if (num/10 - Math.floor(num/10) > 0) {
      output += add_tens(Math.floor(num/10));
      if(num%10 === 9)
        output += 'IX';
      else
        output += underNine(num - 10*Math.floor(num/10));
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
