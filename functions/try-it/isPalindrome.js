console.log(reverse('moon'))
function reverse(str) {
   let reversed = '';
let palindrome ='moon'
   for (let i = 0; i < str.length; i++) {
   reversed = str[i] + reversed;
   
   // if(str === palindrome){
   //   // return true;
     
   // }else 
   // return false;
   }

   return  reversed.split('').reverse().join(''); 

  // return reversed;
  //return  reversed.split('').reverse().join(''); 
}

 //=====================
//  console.log(reverse('moon'))
// function reverse(str) {
//    let reversed = '';
// let palindrome ='moon'
//    for (let i = 0; i < str.length; i++) {
//    reversed = str[i] + reversed;
//    if(str === palindrome){
//      // return true;
//      return  reversed.split('').reverse().join(''); 
//    }else 
//    return false;
//    }
// } 


// let g = reverse(moon);
// let h =  reverse(g);
// let i = g.split('');
// let j = i.reverse();
// let k = j.join('');
// console.log(g)
// console.log(h) 
// console.log(i)
//  console.log(k)