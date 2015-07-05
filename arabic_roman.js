var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var roman = ['M','D','C','L','X','V','I'];

  return a2r(input,roman);

  /** Converts arabic numbers to roman numerals given a base and an array of symbols.

    input: A number less that 4 times the base.
    base: The value of the largest numeral. Must be a power of ten.
    symbols: An array of roman numerals arranged highest to lowest. First numeral must be a power of ten.
  */
  function a2r(num,symbols){

    var output = '', base = Math.pow(10,Math.floor(symbols.length/2))
    , baseBelow = base/10,
        fiveBelow = 5*baseBelow, fourBelow = 4*baseBelow,
        nineBelow = 9*baseBelow, numOverBase = num/base,
        numOverBaseRounded = numOverBaseRounded;

    console.log('base: ' + base);

    if(numOverBase >= 1 && numOverBaseRounded < 4) { // if has repeatable numerals ie I, X, C, or M
      output += repeatableNumerals(numOverBaseRounded,symbols[0]);
      num %= base;
    }

    if(num%fiveBelow >= fourBelow) { // if is a nine or four
      if(num%base >= nineBelow) {
        output += symbols[2] + symbols[0]; // ie IX
        num -= nineBelow;
      } else {
        output += symbols[2] + symbols[1]; // ie IV
        num -= fourBelow;
      }
    }

    if(num/fiveBelow >= 1) { // if has single numeral ie V
      output += symbols[1]; // V
      num -= fiveBelow;
    }

    if(num !== 0 && symbols.length !== 0){
      symbols.shift(); symbols.shift();
      output += a2r(num,symbols);
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
