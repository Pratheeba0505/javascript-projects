const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function(){

  // test("should return true for a single letter", function() {
    //  expect(isPalindrome("AbAb")).toBe(true);
   //});

//    test("should return true for a single letter repeated", function() {
//       expect(isPalindrome("aaa")).toBe(true);
//    });

//    test("should return true for a simple palindrome", function() {
//       expect(isPalindrome("aba")).toBe(true);
//    });

//    test("should return true for a longer palindrome", function() {
//       expect(isPalindrome("raceytytcar")).toBe(true);
//    });
//    test("should return false for a longer non-palindrome", function() {
//       expect(isPalindrome("launchcode")).toBe(false);
//    });

//    test("should return false for a simple non-palindrome", function() {
//       expect(isPalindrome("ab")).toBe(false);
//    });

    test("should be case-insensitive", function() {
      expect(isPalindrome("aa ")).toBe(false);
    });

//    test("should consider whitespace", function() {
//       expect(isPalindrome("so many dynamos")).toBe(false);
//    });
 });

