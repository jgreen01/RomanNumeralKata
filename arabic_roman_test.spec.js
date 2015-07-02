var AR = require('./arabic_roman.js');

describe("Arabic numberal to Roman numeral", function() {
  var a2r = new AR();

  it("One", function() {
    var result = a2r.arabicToRoman(1);
    expect(result).toEqual('I');
  });

  xit("Three", function() {
    var result = a2r.arabicToRoman(3);
    expect(result).toEqual('III');
  });

  xit("Nine", function() {
    var result = a2r.arabicToRoman(9);
    expect(result).toEqual('IX');
  });

  xit("1066", function() {
    var result = a2r.arabicToRoman(1066);
    expect(result).toEqual('MLXVI');
  });

  xit("1989", function() {
    var result = a2r.arabicToRoman(1989);
    expect(result).toEqual('MCMLXXXIX');
  });
});
