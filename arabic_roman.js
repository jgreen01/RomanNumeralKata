var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var output = '';

  for( var i = 0; i < input; i++)
    output += 'I';

  return output;

}

module.exports = AR;
