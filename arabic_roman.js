var AR = function() {
  this._romanNumerals = ['M','D','C','L','X','V','I'];
};

/** Converts arabic numbers to roman numerals given an array of numerals.
  *
  *  input: A number less that 4 times the value of the largest numeral in the numerals array.
  *  numerals: (optional) An array of numerals arranged highest to lowest. First/largest numeral
  *    must be a largestNumeral of ten and array must have an odd number of elements.
  */
AR.prototype.arabicToRoman = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals)==='undefined') numerals = this._romanNumerals.concat();

  var output = '',
      largestNumeral = this._largestNumeralValue(numerals),
      that = this;

  if(input/largestNumeral >= 1 && input/largestNumeral < 4){ // if input has repeatable numerals
    output += repeatableNumerals(Math.floor(input/largestNumeral));  // ie I, X, C, or M
    output += this.arabicToRoman(input % largestNumeral,numerals);
  }

  else if(input%(5*(largestNumeral/10)) >= 4*(largestNumeral/10)){ // if input is a nine or four 
    if(input%largestNumeral >= 9*(largestNumeral/10)) {
      output += nineNumerals();
      input -= 9*(largestNumeral/10);
    } else {
      output += fourNumerals();
      input -= 4*(largestNumeral/10);
    }
    output += this.arabicToRoman(input,numerals);
  }

  else if(input/(5*(largestNumeral/10)) >= 1){ // if input has a five numeral ie single numeral 
    output += fiveNumerals();
    output += this.arabicToRoman(input - 5*(largestNumeral/10),numerals);
  }

  else if(numerals.length !== 0){
    numerals.shift(); // reduces the size of the array by a power of 10
    numerals.shift(); // by removing the two largest numeral from array
    output += this.arabicToRoman(input,numerals);
  }

  return output;

  function fiveNumerals() {
    return numerals[1];
  }

  function fourNumerals() {
    return numerals[2] + numerals[1];
  }

  function nineNumerals() {
    return numerals[2] + numerals[0];
  }

  function repeatableNumerals(count) {
    return numerals[0].repeat(count);
  }
}

/** Converts roman numerals to arabic numbers given an array of numerals.
  *
  *  input: A string of roman numerals less that 4 times the value of the largest numeral in the numerals array.
  *  numerals: (optional) An array of roman numerals arranged highest to lowest. First/largest numeral
  *    must be a largestNumeral of ten and array must have an odd number of elements.
  */
AR.prototype.romanToArabic = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals) === 'undefined') numerals = this._romanNumerals.concat();

  // if input is a string turn it into an array
  if (typeof(input) === 'string') input = input.split('');

  var output = 0,
      largestNumeral = this._largestNumeralValue(numerals);

  // repeatable numerals ie I, X, C, or M
  while(input[0] === numerals[0]){
    output += largestNumeral;
    input.shift();
  }

  // if input is possibly a IV or IX
  if(input[0] === numerals[2]){ // e.g. input[0] == 'I' while the largest numeral (numerals[0]) is 'X'
    // if input is IX
    if(input[1] === numerals[0]){ // the next numeral is the largest numeral
      output += 9*(largestNumeral/10);
      input.shift(); input.shift();
    }
    // if input is IV
    else if(input[1] === numerals[1]){ // the next numeral is the second largest numeral
      output += 4*(largestNumeral/10);
      input.shift(); input.shift();
    }
  }

  // if input is a V
  if(input[0] === numerals[1]){
    output += 5*(largestNumeral/10);
    input.shift();
  }

  if(input.length !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove the two largest numeral from array
    output += this.romanToArabic(input,numerals);
  }

  return Math.floor(output);
}

/** Finds the value of the largest numeral
  * 
  * Every largestNumeral of ten in roman numerals uses two numerals. Therefore, given the length of an array
  * of numerals we can figure out the value of the largest numeral (ie highest largestNumeral of ten).
  *   e.g.  10^((size-1)/2)  // keep in mind 'I' or 1 is included
  */
AR.prototype._largestNumeralValue = function(numerals) {
  return Math.pow(10,(numerals.length-1)/2);
}

module.exports = AR;
