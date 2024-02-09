const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Descriptive feedback...", function(){
      let output = checkFive(5);
      expect(output).toEqual("5 is equal to 5.");
   });

});
