const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str. 
let text = "LaunchCode";
console.log(text);
console.log(text.slice(3));
console.log(text .concat("Lau"));



Newstr = str.slice(3);
NewNewstr = Newstr.concat("Lau");

console.log(NewNewstr);



//Use a template literal to print the original and modified string in a descriptive phrase.
Print1 = `Original string is ${text}` ;
console.log(Print1); 
Print2 = `Modified string is ${NewNewstr}` ;
console.log(Print2);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//console.log(text.indexOf(1));
//let userName = prompt("Please enter your name:");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

//let userName = prompt("Please enter your name:");
//console.log("Hello, " + userName + "!");
