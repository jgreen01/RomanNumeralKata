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

  xit("Ten", function() {
    var result = a2r.arabicToRoman(10);
    expect(result).toEqual('X');
  });

  xit("Thirteen", function() {
    var result = a2r.arabicToRoman(13);
    expect(result).toEqual('XIII');
  });

  xit("Fourteen", function() {
    var result = a2r.arabicToRoman(14);
    expect(result).toEqual('XIV');
  });

  xit("Fifteen", function() {
    var result = a2r.arabicToRoman(15);
    expect(result).toEqual('XV');
  });

  xit("Eighteen", function() {
    var result = a2r.arabicToRoman(18);
    expect(result).toEqual('XVIII');
  });

  xit("Nineteen", function() {
    var result = a2r.arabicToRoman(19);
    expect(result).toEqual('XIX');
  });

  xit("Twenty", function() {
    var result = a2r.arabicToRoman(20);
    expect(result).toEqual('XX');
  });

  xit("Thirty", function() {
    var result = a2r.arabicToRoman(30);
    expect(result).toEqual('XXX');
  });

  xit("Thirty eight", function() {
    var result = a2r.arabicToRoman(38);
    expect(result).toEqual('XXXVIII');
  });

  xit("Thirty nine", function() {
    var result = a2r.arabicToRoman(39);
    expect(result).toEqual('XXXIX');
  });

  xit("Forty", function() {
    var result = a2r.arabicToRoman(40);
    expect(result).toEqual('XL');
  });

  xit("Fifty", function() {
    var result = a2r.arabicToRoman(50);
    expect(result).toEqual('L');
  });

  xit("Sixty", function() {
    var result = a2r.arabicToRoman(60);
    expect(result).toEqual('LX');
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
