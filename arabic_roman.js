var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var output = 'I';

  for( var i = 1; i < input; i++)
    output += 'I';

  return output;
}

module.exports = AR;
