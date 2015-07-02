var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var result = '';

  if (input/5 === Math.floor(input/5))
    result += fives(input/5);
  else {
    result += fives(Math.floor(input/5));
    result += ones(input%5);
  }

  return result;

  function ones(num){
    var output = '';

    for( var i = 0; i < num; i++)
      output += 'I';

    return output;
  }

  function fives(num){
    var output = '';

    for( var i = 0; i < num; i++)
      output += 'V';

    return output;
  }
}

module.exports = AR;
