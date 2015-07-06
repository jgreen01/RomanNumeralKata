var AR = require('./arabic_roman.js');

describe("Arabic numeral to Roman numeral", function() {
  var ar = new AR();

  it("1 to I Required Test.", function() {
    var result = ar.arabicToRoman(1);
    expect(result).toEqual('I');
  });

  it("2 to II.", function() {
    var result = ar.arabicToRoman(2);
    expect(result).toEqual('II');
  });

  it("3 to III. Required Test.", function() {
    var result = ar.arabicToRoman(3);
    expect(result).toEqual('III');
  });

  it("4 to IV.", function() {
    var result = ar.arabicToRoman(4);
    expect(result).toEqual('IV');
  });

  it("5 to V.", function() {
    var result = ar.arabicToRoman(5);
    expect(result).toEqual('V');
  });

  it("6 to VI.", function() {
    var result = ar.arabicToRoman(6);
    expect(result).toEqual('VI');
  });

  it("7 to VII.", function() {
    var result = ar.arabicToRoman(7);
    expect(result).toEqual('VII');
  });

  it("8 to VIII.", function() {
    var result = ar.arabicToRoman(8);
    expect(result).toEqual('VIII');
  });

  it("9 to IX. Required Test.", function() {
    var result = ar.arabicToRoman(9);
    expect(result).toEqual('IX');
  });

  it("10 to X.", function() {
    var result = ar.arabicToRoman(10);
    expect(result).toEqual('X');
  });

  it("13 to XIII.", function() {
    var result = ar.arabicToRoman(13);
    expect(result).toEqual('XIII');
  });

  it("14 to XIV.", function() {
    var result = ar.arabicToRoman(14);
    expect(result).toEqual('XIV');
  });

  it("15 to XV.", function() {
    var result = ar.arabicToRoman(15);
    expect(result).toEqual('XV');
  });

  it("18 to XVIII.", function() {
    var result = ar.arabicToRoman(18);
    expect(result).toEqual('XVIII');
  });

  it("19 to XIX.", function() {
    var result = ar.arabicToRoman(19);
    expect(result).toEqual('XIX');
  });

  it("20 to XX.", function() {
    var result = ar.arabicToRoman(20);
    expect(result).toEqual('XX');
  });

  it("30 to XXX.", function() {
    var result = ar.arabicToRoman(30);
    expect(result).toEqual('XXX');
  });

  it("38 to XXXVIII.", function() {
    var result = ar.arabicToRoman(38);
    expect(result).toEqual('XXXVIII');
  });

  it("39 to XXXIX.", function() {
    var result = ar.arabicToRoman(39);
    expect(result).toEqual('XXXIX');
  });

  it("40 to XL.", function() {
    var result = ar.arabicToRoman(40);
    expect(result).toEqual('XL');
  });

  it("50 to L.", function() {
    var result = ar.arabicToRoman(50);
    expect(result).toEqual('L');
  });

  it("60 to LX.", function() {
    var result = ar.arabicToRoman(60);
    expect(result).toEqual('LX');
  });

  it("80 to LXXX.", function() {
    var result = ar.arabicToRoman(80);
    expect(result).toEqual('LXXX');
  });

  it("90 to XC.", function() {
    var result = ar.arabicToRoman(90);
    expect(result).toEqual('XC');
  });

  it("101 to CI.", function() {
    var result = ar.arabicToRoman(101);
    expect(result).toEqual('CI');
  });

  it("212 to CCXII.", function() {
    var result = ar.arabicToRoman(212);
    expect(result).toEqual('CCXII');
  });

  it("353 to CCCLIII.", function() {
    var result = ar.arabicToRoman(353);
    expect(result).toEqual('CCCLIII');
  });

  it("404 to CDIV.", function() {
    var result = ar.arabicToRoman(404);
    expect(result).toEqual('CDIV');
  });

  it("555 to DLV.", function() {
    var result = ar.arabicToRoman(555);
    expect(result).toEqual('DLV');
  });

  it("846 to DCCCXLVI.", function() {
    var result = ar.arabicToRoman(846);
    expect(result).toEqual('DCCCXLVI');
  });

  it("927 to CMXXVII.", function() {
    var result = ar.arabicToRoman(927);
    expect(result).toEqual('CMXXVII');
  });

  it("1008 to MVIII.", function() {
    var result = ar.arabicToRoman(1008);
    expect(result).toEqual('MVIII');
  });

  it("1066 to MLXVI. Required Test.", function() {
    var result = ar.arabicToRoman(1066);
    expect(result).toEqual('MLXVI');
  });

  it("1989 to MCMLXXXIX. Required Test.", function() {
    var result = ar.arabicToRoman(1989);
    expect(result).toEqual('MCMLXXXIX');
  });

  it("1999 to MCMXCIX", function() {
    var result = ar.arabicToRoman(1999);
    expect(result).toEqual('MCMXCIX');
  });

  it("2420 to MMCDXX.", function() {
    var result = ar.arabicToRoman(2420);
    expect(result).toEqual('MMCDXX');
  });

  it("3888 to MMMDCCCLXXXVIII.", function() {
    var result = ar.arabicToRoman(3888);
    expect(result).toEqual('MMMDCCCLXXXVIII');
  });

  it("3999 to MMMCMXCIX.", function() {
    var result = ar.arabicToRoman(3999);
    expect(result).toEqual('MMMCMXCIX');
  });

  it("I to 1. Required Test.", function() {
    var result = ar.romanToArabic('I');
    expect(result).toEqual(1);
  });

  it("II to 2.", function() {
    var result = ar.romanToArabic('II');
    expect(result).toEqual(2);
  });

  it("III to 3. Required Test.", function() {
    var result = ar.romanToArabic('III');
    expect(result).toEqual(3);
  });

  it("IV to 4.", function() {
    var result = ar.romanToArabic('IV');
    expect(result).toEqual(4);
  });

  it("V to 5.", function() {
    var result = ar.romanToArabic('V');
    expect(result).toEqual(5);
  });

  it("VI to 6.", function() {
    var result = ar.romanToArabic('VI');
    expect(result).toEqual(6);
  });

  it("VII to 7.", function() {
    var result = ar.romanToArabic('VII');
    expect(result).toEqual(7);
  });

  it("VIII to 8.", function() {
    var result = ar.romanToArabic('VIII');
    expect(result).toEqual(8);
  });

  it("IX to 9. Required Test.", function() {
    var result = ar.romanToArabic('IX');
    expect(result).toEqual(9);
  });

  it("X to 10.", function() {
    var result = ar.romanToArabic('X');
    expect(result).toEqual(10);
  });

  it("CDIV to 404.", function() {
    var result = ar.romanToArabic('CDIV');
    expect(result).toEqual(404);
  });

  it("DLV to 555.", function() {
    var result = ar.romanToArabic('DLV');
    expect(result).toEqual(555);
  });

  it("DCCCXLVI to 846.", function() {
    var result = ar.romanToArabic('DCCCXLVI');
    expect(result).toEqual(846);
  });

  it("MLXVI to 1066. Required Test.", function() {
    var result = ar.romanToArabic('MLXVI');
    expect(result).toEqual(1066);
  });

  it("MCMLXXXIX to 1989. Required Test.", function() {
    var result = ar.romanToArabic('MCMLXXXIX');
    expect(result).toEqual(1989);
  });

  it("MMCDXX to 2420", function() {
    var result = ar.romanToArabic('MMCDXX');
    expect(result).toEqual(2420);
  });

  it("MMMDCCCLXXXVIII to 3888", function() {
    var result = ar.romanToArabic('MMMDCCCLXXXVIII');
    expect(result).toEqual(3888);
  });

  it("MMMCMXCIX to 3999", function() {
    var result = ar.romanToArabic('MMMCMXCIX');
    expect(result).toEqual(3999);
  });

});
