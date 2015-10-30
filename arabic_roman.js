var AR = function() {
  this._romanNumerals = ['M','D','C','L','X','V','I'];
};

/** Converts arabic numbers to roman numerals given an array of numerals.
  *
  *  input: A number less that 4 times the value of the largest numeral in the numerals array.
  *  numerals: (optional) An array of numerals arranged highest to lowest. First/largest numeral
  *    must be a power of ten and array must have an odd number of elements.
  */
AR.prototype.arabicToRoman = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals)==='undefined') numerals = this._romanNumerals.concat();

  var output = '',
      power = this._largestNumeralValue(numerals);

  if(input/power >= 1 && input/power < 4) // if input has repeatable numerals
    output += repeatableNumerals();  // ie I, X, C, or M

  if(input%(5*(power/10)) >= 4*(power/10)) // if input is a nine or four 
    output += nineOrFourNumerals(); // input%5 >= 4 is always true for input%10 >= 9

  if(input/(5*(power/10)) >= 1) // if input has a five numeral ie single numeral 
    output += fiveNumerals();

  if(input !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove the two largest numeral from array
    output += this.arabicToRoman(input,numerals);
  }

  return output;

  function fiveNumerals() {
    var result = '';

    result += numerals[1]; // V, L , D
    input -= 5*(power/10);

    return result;
  }

  function nineOrFourNumerals() {
    var result = '';

    // if input is nine
    if(input%power >= 9*(power/10)) {
      result += numerals[2] + numerals[0]; // ie IX
      input -= 9*(power/10);
    } else {
      result += numerals[2] + numerals[1]; // ie IV
      input -= 4*(power/10);
    }

    return result;
  }

  function repeatableNumerals() {
    var result = '';

    for( var i = 0, inOvrPwr = Math.floor(input/power); i < inOvrPwr; i++ ){
      result += numerals[0];
      input %= power;
    }

    return result;
  }
}

/** Converts roman numerals to arabic numbers given an array of numerals.
  *
  *  input: A string of roman numerals less that 4 times the value of the largest numeral in the numerals array.
  *  numerals: (optional) An array of roman numerals arranged highest to lowest. First/largest numeral
  *    must be a power of ten and array must have an odd number of elements.
  */
AR.prototype.romanToArabic = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals) === 'undefined') numerals = this._romanNumerals.concat();

  // if input is a string turn it into an array
  if (typeof(input) === 'string') input = input.split('');

  var output = 0,
      power = this._largestNumeralValue(numerals);

  // repeatable numerals ie I, X, C, or M
  while(input[0] === numerals[0]){
    output += power;
    input.shift();
  }

  // if input is possibly a IV or IX
  if(input[0] === numerals[2]){ // e.g. input[0] == 'I' while the largest numeral (numerals[0]) is 'X'
    // if input is IX
    if(input[1] === numerals[0]){ // the next numeral is the largest numeral
      output += 9*Math.floor(power/10);
      input.shift(); input.shift();
    }
    // if input is IV
    else if(input[1] === numerals[1]){ // the next numeral is the second largest numeral
      output += 4*Math.floor(power/10);
      input.shift(); input.shift();
    }
  }

  // if input is a V
  if(input[0] === numerals[1]){
    output += 5*Math.floor(power/10);
    input.shift();
  }

  if(input.length !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove the two largest numeral from array
    output += this.romanToArabic(input,numerals);
  }

  return output;
}

AR.prototype._largestNumeralValue = function(numerals) {
  return Math.pow(10,Math.floor(numerals.length/2));
}

module.exports = AR;
