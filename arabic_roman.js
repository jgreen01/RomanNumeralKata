var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  var roman = ['I','V','X','L','C','D','M'];

  var one_roman = roman[0], five_roman = roman[1],
      ten_roman = roman[2], fifty_roman = roman[3],
      one_hundred_roman = roman[4], five_hundred_roman = roman[5],
      one_thousand_roman = roman[6];


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

  function underForty(num,base,symbol){
    var output = '';

    if (num/base === Math.floor(num/base))
      output += repeatableNumerals(Math.floor(num/base),symbol);
    else if (num/base - Math.floor(num/base) > 0) {
      output += repeatableNumerals(Math.floor(num/base),symbol);
      if (num%base === 9)
        output += roman[roman.indexOf(symbol)-2] + roman[roman.indexOf(symbol)-1];
      else
        output += singleNumerals(num,base/10,roman[roman.indexOf(symbol)-1],roman[roman.indexOf(symbol)-2]);
    }

    return output;
  }

  function underNinety(num){
    return singleNumerals(num,10,fifty_roman);
  }

  function singleNumerals(num,base,symbol){
    var output = '', symbol_below = roman[roman.indexOf(symbol)-1];

    if(num%(5*base) === 4*base)
      output += symbol_below + symbol
    //else if (num/(5*base) === Math.floor(num/(5*base)))
    //  output += symbol;
    else if (num < 4*base) // at 4 and 9 is when new symbols are added
      output += underForty(num - 5*base);
    else {
      output += symbol;
      output += underForty(num - 5*base,base,symbol_below);
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
