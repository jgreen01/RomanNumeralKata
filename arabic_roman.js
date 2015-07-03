var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  var one_roman = 'I', five_roman = 'V',
      ten_roman = 'X', fifty_roman = 'L',
      one_hundred_roman = 'C', five_hundred_roman = 'D',
      one_thousand_roman = 'M';

  if (input/10 === Math.floor(input/10))
    result += tens(Math.floor(input/10));
  else if (input/10 - Math.floor(input/10) > 0) {
    result += tens(Math.floor(input/10));
    if(input%10 === 9)
      result += 'IX';
    else
      result += underNine(input - 10*Math.floor(input/10));
  }

  return result;

  function ones(num){
    return repeatableNumerals(num,one_roman);
  }

  function tens(num){
    return repeatableNumerals(num,ten_roman);
  }

  function underNine(num){
    var output = '';

    if(num%5 === 4)
      output += 'IV';
    else if (num/5 === Math.floor(input/5))
      output += 'V';
    else if (num/5 > 1){
      output += 'V';
      output += ones(num%5);
    }
    else
      output += ones(num%5);

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
