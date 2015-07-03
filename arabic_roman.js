var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  var roman = ['I','V','X','L','C','D','M'];

  var one_roman = roman[0], five_roman = roman[1],
      ten_roman = roman[2], fifty_roman = roman[3],
      one_hundred_roman = roman[4], five_hundred_roman = roman[5],
      one_thousand_roman = roman[6];


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
