// // Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// const { error } = require("console");
// // Your function should return the result of numerator / denominator.

// // However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// // Code your divide function here:
function divide(numerator, denominator)
 {
    if (denominator === 0)
     {
       throw Error("Attempted to divide by zero.");
    }
    return numerator/denominator;
 };
 console.log(divide(8,3));
 console.log(divide(8,0));

// function validateArrayNotEmpty(arr) {
//    if (arr.length === 0) {
//      throw new Error('Array is empty!');
//    }
//  }
 
//  // Example usage:
//  try {
//    const str1 = ["aa,bb,cc,dd"];
   
//    validateArrayNotEmpty(str1); // Valid non-empty array
 
//    const str2 = [];
//    validateArrayNotEmpty(str2); // Throws an error
//  } catch (error) {
//    console.log('Error:', error.message);
//  }




