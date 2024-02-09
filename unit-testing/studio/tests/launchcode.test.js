// launchcode.test.js code:
 const launchcode = require('../index.js');

describe("Testing launchcode", function(){

   // Write your unit tests here!
  
  test("should have the property called  organization" , function() {
    expect(launchcode.organization).toEqual("nonprofit");
 });


 test("should have the property called executiveDirector " , function() {
  expect(launchcode.organization).toEqual("Jeff");
}); 

test("should have the property called percentageCoolEmployees " , function() {
  expect(launchcode.organization).toEqual(100);
}); 

test("should have the property called programsOffered " , function() {
  expect(launchcode.program[0]).toEqual("Web Development");
  expect(launchcode.program[1]).toEqual("Data Analysis");
  expect(launchcode.program[2]).toEqual("Liftoff");
  expect(launchcode.programsOffered.length).toEqual(3);
}); 
describe("should have a method, launchcode, which", function(){ 

  test("should return 'Launch!' for numbers evenly divisible by only 2", function(){
  expect(launchcode.launchcode(2)).toBe("Launch!");
  });

  test("should return 'Code!' for numbers evenly divisible by only 3", function(){
    expect(launchcode.launchcode(3)).toBe("Code!");
  });
  test("should return 'Rocks!' for numbers evenly divisible by only 5", function(){
  expect(launchcode.launchcode(5)).toBe("Rocks!");
});
test("should return 'LaunchCode!' for numbers evenly divisible by 2 and 3",function(){
  expect(launchcode.launchcode(2, 3)).toBe('LaunchCode!');
  });
  test("should return 'Code Rocks!' for numbers evenly divisible by 3 and 5",function(){
    expect(launchcode.launchcode(3, 5)).toBe('Code Rocks!');
    });

}); 
test("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by 2 and 5",function(){
  expect(launchcode.launchcode(2, 5)).toBe('Launch Rocks! (CRASH!!!!)');
  });
  test("should return 'LaunchCode Rocks!' for numbers evenly divisible by 2,3 and 5",function(){
    expect(launchcode.launchcode(2, 3 ,5)).toBe('LaunchCode Rocks!');
    });
    test("should return 'Rutabagas! That doesnot't work.' for numbers evenly not divisible by 2,3 and 5",function(){
      expect(launchcode.launchcode(2, 3 ,5)).toBe('Rutabagas! That doesnot work');
      });

});

  