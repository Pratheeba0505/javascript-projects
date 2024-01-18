//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.indexOf('J'));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(language[1]);
console.log(language[6]);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toUpperCase());
console.log( language.trim());
console.log(language.length);
console.log(String(language).length);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let notTitleCase1 =notTitleCase.replace('title','Title');

console.log( notTitleCase1);


