let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
}; 
for (item in superChimpOne ){
   console.log(item + " :" + superChimpOne[item]);
}
/* function superChimpOne(arr){
   let index = Math.floor(Math.random()* arrayBufferEquality.length);
   return arr[index];
   }
   for( i =0; i < 4,i++){
      console.log( superChimpOne(crew));    
   }*/
let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5 ,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};
for (item in salamander ){
   console.log(item + " ," + salamander[item]);
}

// After you have created the other object literals, add the astronautID property to each one.
let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3,
    move: function () {return Math.floor(Math.random()*11)}
};
for (item in superChimpTwo  ){
   console.log(item + " ," +superChimpTwo [item]);
}


let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 4,
    move: function () {return Math.floor(Math.random()*11)}
};
for (item in  dog  ){
   console.log(item + " ," + dog [item]);
}

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 5,
    move: function () {return Math.floor(Math.random()*11)}
};
for (item in waterBear  ){
   console.log(item + " ," +waterBear[item]);
}


let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];


//let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];


// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function crewreports(animal){

species : "Galapagos Tortoise";
name : "Pete";
weight : 919;
age: 85;
} 
console.log(crewreports);


function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   console.log(results)
   return results;
   
  };



  console.log(fitnessTest(crew));







// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
