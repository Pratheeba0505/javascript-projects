const input = require('readline-sync');
let str = "LaunchCode ttttttttttttt";

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
let userInput = input.question("enter the number of letters will be relocated "); 
console.log(userInput);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (str.length> userInput ){

   let Updateuserinput = (userInput + 3)
    
   if (str.length> Updateuserinput ){
    console.log(`original string count: \"${str}\ is greater than the user input count: '${Updateuserinput}`)
}
else{console.log(`Error in the input by user, original string count is :\"${str.length}\ user input string count is: |'${Updateuserinput}}`)}}

     else if (str.length>userInput){
    console.log(`Error in the input by user, original string count is :\"${str.length}\ user input string count is: |'${userInput}}`)
}


else  {
    //let updatestr = str.slice(userinput,str.length)+str.slice(0,userinput);
    //console.log(`original string is : \"${str}\ " \n"Modified string is: |'${NewNewstr}}`)
    console.log(`original string count: \"${str}\ is greater than the user input count: '${userInput}`)
    
    
}