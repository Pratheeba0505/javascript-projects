// const input = require('readline-sync');
// let userInput = input.question("Please enter a number:");
// let logger = function(errorMsg) {
//   console.log("ERROR: " + errorMsg);
// };
// if (userInput < 0) {
//   // ______("Invalid input");
// }

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.
let logger1= function(errorMsg) {
  console.log("ERROR: " + errorMsg);
  let userInput = errorMsg;
  console.log('User Input is ' + userInput)
if (userInput < 0) {
    console.log("Invalid input")}
  else {
    console.log("valid input")}
  };



//console.log(logger(7));
logger1(-7)

