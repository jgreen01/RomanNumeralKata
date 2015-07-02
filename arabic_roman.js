var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  if (input/5 === Math.floor(input/5))
    result += 'V';
  else if ( input/5 > 1){
    result += 'V';
    result += ones(input%5);
  }
  else
    result += ones(input%5);

  return result;

  function ones(num){
    return repeatableNumerals(num,'I');
  }

  function tens(num){
    return repeatableNumerals(num,'X');
  }

  function repeatableNumerals(num,symbol){
    var output = '';

    for( var i = 0; i < num && i < 3; i++)
      output += symbol;

    return output;
  }
}

module.exports = AR;
