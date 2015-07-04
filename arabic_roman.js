var AR = function() {};

AR.prototype.arabicToRoman = function(input) {

  var roman = ['M','D','C','L','X','V','I'];

  var result = a2r(input,1000,roman);
  console.log('result: ' + result);

  return result;

  function a2r(num,base,symbols){

    var output = '';

    console.log('symbol_arr: ' + symbols.toString() + ' base: ' + base + ' num: ' + num);

    if(num/base >= 1 && Math.floor(num/base) < 4) { // if has repeatable numberals ie I
      output += repeatableNumerals(Math.floor(num/base),symbols[0]);
      num -= Math.floor(num/base)*base; // the remainder of num/base
    }

    if(num%(5*(base/10)) >= 4*(base/10)) { // if is a nine or four
      if(num%base >= 9*(base/10)) {
        output += symbols[2] + symbols[0]; // ie IX
        num -= 9*(base/10); // sub
      } else {
        output += symbols[2] + symbols[1]; // ie IV
        num -= 4*(base/10); // ?right?
      }
    }

    if(num/(5*(base/10)) >= 1) { // if has single numberal ie V
      output += symbols[1]; // V
      num -= 5*(base/10);
    }

    console.log('output: ' + output + ' num: ' + num);

    if(num !== 0 && symbols.length !== 0){
      symbols.shift(); symbols.shift();
      output += a2r(num,base/10,symbols);
    }

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
