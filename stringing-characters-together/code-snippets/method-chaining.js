//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
 console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let word1 = 'Java script fyfy fyfy dtdryters ';
let word2 = word1.indexOf("script")
console.log(word2);

let word3 = " Javascript methods";
let word4 =  word3.replace( /methods/g ,"guhgugu");
console.log(word4);
let word5 =" Javascript methods";
let word6 = word5.slice(0,10);
console.log( word6);