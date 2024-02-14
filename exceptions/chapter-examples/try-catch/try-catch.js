// const input = require('readline-sync');

// let animals = [{name: 'cat'}, {name: 'dog'}];
// let index = Number(input.question("Enter index of animal:"));

// try {
//     console.log('animal at index:', animals[index].name);
// } catch(TypeError) {
//     console.log("We caught a TypeError, but our program continues to run!");
//     console.log("You tried to access an animal at index:", index);
// }

// console.log("the code goes on...");

function validateInteger(number) 
{
  if (!Number.isInteger(number)) 
  {
    throw new Error('Invalid number. Please input an integer.');
  }
  console.log('Number is valid:', number);
}

// Example usage:
try {
  validateInteger(12); // Valid integer
  validateInteger(2.12); // Throws an error
} catch (error) {
  console.log('Error:', error.message);
}