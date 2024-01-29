
function decreasingSum(integer) {
   console.log(integer);
   if (integer === 1){
      return integer;
   } else {

return integer + (decreasingSum(integer-1));



   }
}


console.log(decreasingSum(5));
