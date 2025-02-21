let num = 1001;

//Returns 'undefined'.
console.log(num.length);
console.log(String(num).length);

//Use type conversion to print the length (number of digits) of an integer.
let a = 1234566
console.log(String(a).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let T = 542.22
console.log(String(T).length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(T).includes('.')){
    console.log(String(T).length-1);
    } else {
    console.log(String(T).length);
    }