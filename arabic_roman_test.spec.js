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

  it("Fourteen", function() {
    var result = a2r.arabicToRoman(14);
    expect(result).toEqual('XIV');
  });

  it("Fifteen", function() {
    var result = a2r.arabicToRoman(15);
    expect(result).toEqual('XV');
  });

  it("Eighteen", function() {
    var result = a2r.arabicToRoman(18);
    expect(result).toEqual('XVIII');
  });

  it("Nineteen", function() {
    var result = a2r.arabicToRoman(19);
    expect(result).toEqual('XIX');
  });

  it("Twenty", function() {
    var result = a2r.arabicToRoman(20);
    expect(result).toEqual('XX');
  });

  it("Thirty", function() {
    var result = a2r.arabicToRoman(30);
    expect(result).toEqual('XXX');
  });

  it("Thirty eight", function() {
    var result = a2r.arabicToRoman(38);
    expect(result).toEqual('XXXVIII');
  });

  it("Thirty nine", function() {
    var result = a2r.arabicToRoman(39);
    expect(result).toEqual('XXXIX');
  });

  it("Forty", function() {
    var result = a2r.arabicToRoman(40);
    expect(result).toEqual('XL');
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
