var AR = require('./arabic_roman.js');

describe("Arabic numberal to Roman numeral", function() {
  var a2r = new AR();

  it("One", function() {
    var result = a2r.arabicToRoman(1);
    expect(result).toEqual('I');
  });

  it("Three", function() {
    var result = a2r.arabicToRoman(3);
    expect(result).toEqual('III');
  });

  it("Four", function() {
    var result = a2r.arabicToRoman(4);
    expect(result).toEqual('IV');
  });

  it("Five", function() {
    var result = a2r.arabicToRoman(5);
    expect(result).toEqual('V');
  });

  it("Eight", function() {
    var result = a2r.arabicToRoman(8);
    expect(result).toEqual('VIII');
  });

  it("Nine", function() {
    var result = a2r.arabicToRoman(9);
    expect(result).toEqual('IX');
  });

  it("Ten", function() {
    var result = a2r.arabicToRoman(10);
    expect(result).toEqual('X');
  });

  it("Thirteen", function() {
    var result = a2r.arabicToRoman(13);
    expect(result).toEqual('XIII');
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
