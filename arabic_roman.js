var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  var one_roman = 'I', five_roman = 'V',
      ten_roman = 'X', fifty_roman = 'L',
      one_hundred_roman = 'C', five_hundred_roman = 'D',
      one_thousand_roman = 'M';

  result += underNinety(input);

  /*if (input/10 === Math.floor(input/10))
    result += tens(Math.floor(input/10));
  else if (input/10 - Math.floor(input/10) > 0) {
    result += tens(Math.floor(input/10));
    if(input%10 === 9)
      result += 'IX';
    else
      result += underNine(input - 10*Math.floor(input/10));
  }*/

  return result;

  function add_ones(num){
    return repeatableNumerals(num,one_roman);
  }

  function add_tens(num){
    return repeatableNumerals(num,ten_roman);
  }

  function underNine(num){
    return singleNumerals(num,1,five_roman,one_roman);
  }

  function underNinety(num){
    return singleNumerals(num,10,fifty_roman,ten_roman);
  }

  function singleNumerals(num,base,symbol,symbol_below){
    var output = '';

    if(num%(5*base) === 4*base)
      output += symbol_below + symbol
    else if (num/(5*base) === Math.floor(num/(5*base)))
      output += symbol;
    else if (num/(5*base) > 1){
      output += symbol;
      output += repeatableNumerals(Math.floor(num/base)-5 ,symbol_below);
    }
    else
      output += repeatableNumerals(num%(5*base),symbol_below);

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
