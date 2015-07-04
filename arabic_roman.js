var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var roman = ['M','D','C','L','X','V','I'];

  return a2r(input,1000,roman);

  /** Converts arabic numbers to roman numerals given a base and an array of symbols.

    input: A number less that 4 times the base.
    base: The value of the largest numeral. Must be a power of ten.
    symbols: An array of roman numerals arranged highest to lowest. First numeral must be a power of ten.
  */
  function a2r(num,base,symbols){

    var output = '', baseBelow = base/10;

    if(num/base >= 1 && Math.floor(num/base) < 4) { // if has repeatable numerals ie I
      output += repeatableNumerals(Math.floor(num/base),symbols[0]);
      num -= Math.floor(num/base)*base; // the remainder of num/base
    }

    if(num%(5*baseBelow) >= 4*baseBelow) { // if is a nine or four
      if(num%base >= 9*baseBelow) {
        output += symbols[2] + symbols[0]; // ie IX
        num -= 9*baseBelow;
      } else {
        output += symbols[2] + symbols[1]; // ie IV
        num -= 4*baseBelow;
      }
    }

    if(num/(5*baseBelow) >= 1) { // if has single numeral ie V
      output += symbols[1]; // V
      num -= 5*baseBelow;
    }

    if(num !== 0 && symbols.length !== 0){
      symbols.shift(); symbols.shift();
      output += a2r(num,base/10,symbols);
    }

    return output;

    function repeatableNumerals(num,symbol){
      var output = '';

      for( var i = 0; i < num; i++)
        output += symbol;

      return output;
    }
  }
}

module.exports = AR;
