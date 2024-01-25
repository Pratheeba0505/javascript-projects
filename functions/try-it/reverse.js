 
 function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }


function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
   reversed = str[i] + reversed;
   
   }


   return reversed;
   
}

 
 let  a  =  reverse('xyz'); 
 let b = reverse(a);
 let c = a.split('')
 let d = c.reverse();
 let e = d.join('');

console.log(a)
console.log(b) 
console.log(c)
 console.log(e)
