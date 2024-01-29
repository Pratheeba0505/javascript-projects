function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));


let f1 = function(str) {
  return str + str;
};

let f2 = f1
console.log(f2('adfsdfsd'));

///////////////////////////////////////////////////////////////////////////////

 let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
  let userInput = errorMsg;
  console.log('User Input is ' + userInput)
if (userInput < 0) {
    console.log("Invalid input")}
  else {
    console.log("valid input")}
  };



//console.log(logger(7));
logger(-7)