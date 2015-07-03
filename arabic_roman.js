var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  var one_roman = 'I', five_roman = 'V',
      ten_roman = 'X', fifty_roman = 'L',
      one_hundred_roman = 'C', five_hundred_roman = 'D',
      one_thousand_roman = 'M';

  result += underNinety(input);

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

  function underForty(num){
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

  function underNinety(num){
    return singleNumerals(num,10,fifty_roman,ten_roman);
  }

  function singleNumerals(num,base,symbol,symbol_below){
    var output = '';

    if(num%(5*base) === 4*base)
      output += symbol_below + symbol
    else if (num/(5*base) === Math.floor(num/(5*base)))
      output += symbol;
    else {
      output += symbol;
      output += underForty(num - 5*base);
      //output += repeatableNumerals(Math.floor(num/base)-5 ,symbol_below);
    }
    //else
    //  output += repeatableNumerals(num%(5*base),symbol_below);

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
