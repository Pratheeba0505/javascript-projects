//1.makeline(size)function:
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#' ;
    }
    return line;
  }
  console.log(makeLine(5));
  //2.makesquare(size)function:
   function makesquare(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '#';
  }
  return line;
}
console.log(makesquare(5));
//3.makesize(rectangle)function:
function makerectangle (width,heigth){
    let rectangle = '';
    for (let i = 0; i < heigth; i++) {
       rectangle += makeLine(width + '\n')
    }
    return rectangle.slice(0,-1);
}
console.log(makerectangle(8,3));


   //4.makedownwardstairs(height)function:
  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));
 

//5.makespaceLine(numSpaces, numChars):
function makespaceLine(numSpaces, numChars){
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
    spaceLine  +=  (makeLine(i+1) + '\n');
   
    }
    return spaceLine;
  }
  console.log(makespaceLine(3,5));
  // 6.makeIsoscelesTriangle(height):
  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
   triangle  +=  (makeLine(height - i - 1, 2 * i + 1) + '\n');
   
    }
    return  triangle. slice(0,-1);
  }
  console.log(makeIsoscelesTriangle(5)); 
  //6.makeDiamond(height):

 function makediamond(height) {
    let tophalf =makeIsoscelesTriangle(height) ;
    let bottomhalf= reverse(tophalf);
    for (let i = 0; i < height; i++) {
  //triangle  +=  (makeLine(height - i - 1, 2 * i + 1) + '\n');
   
    }
    return  `${tophalf}\n${bottomhalf}`;
  }
  console.log(makediamond(5));
  function reverse (str){
    let reversed = '';

for(i = 0; i < str.length; i++ ){
reversed = str[i] + reversed;
}
return reversed;
}

