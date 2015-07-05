var AR = function() {
  this._romanNumerals = ['M','D','C','L','X','V','I'];
};

/** Converts arabic numbers to roman numerals given an array of numerals.
  *
  *  input: A number less that 4 times the value of the largest numeral.
  *  numerals: An array of roman numerals arranged highest to lowest. First/largest numeral must be a power of ten.
  */
AR.prototype.arabicToRoman = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals)==='undefined') numerals = this._romanNumerals.concat();

  var output = '',
      base = Math.pow(10,Math.floor(numerals.length/2)), // base: The value of the largest numeral.
      // optimized code to use the fewest number of calculations
      baseBelow = base/10, fiveBelow = 5*baseBelow,
      fourBelow = 4*baseBelow, nineBelow = 9*baseBelow,
      numOverBase = input/base, numOverBaseRounded = Math.floor(numOverBase);

  // if input has repeatable numerals ie I, X, C, or M
  if(numOverBase >= 1 && numOverBaseRounded < 4) {
    for( var i = 0; i < numOverBaseRounded; i++) output += numerals[0];
    input %= base;
  }

  // if input is a nine or four
  if(input%fiveBelow >= fourBelow) { // input%5 >= 4 is always true for input%10 >= 9
    // if input is nine
    if(input%base >= nineBelow) {
      output += numerals[2] + numerals[0]; // ie IX
      input -= nineBelow;
    } else {
      output += numerals[2] + numerals[1]; // ie IV
      input -= fourBelow;
    }
  }

  // if input has a five numeral ie single numeral
  if(input/fiveBelow >= 1) {
    output += numerals[1]; // V, L , D
    input -= fiveBelow;
  }

  if(input !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove top two numeral from array
    output += this.arabicToRoman(input,numerals);
  }

  return output;
}

module.exports = AR;
