let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let ar0 = food.split(" ,");
 food.split(",")
console.log(ar0);
console.log(ar0.sort());

let ar1 = equipment.split(",");
equipment.split(",")
console.log(ar1); 
console.log(ar1.sort());

let ar2 = pets.split(",");
pets.split(",")
console.log(ar2);
console.log(ar2.sort());

let ar3 = sleepAids.split(",");
sleepAids.split(",")
console.log(ar3);
console.log(ar3.sort());

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

cargoHold = ar0.concat(ar1).concat(ar2).concat(ar3);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
//cargoHold.splice (1,15);
//console.log(cargoHold);


cargoHold.slice(2,1);
console.log(cargoHold);
//let result = text.slice(3, 8);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
//cargoHold.splice(0,5);
//console.log(cargoHold);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cargoHold.includes("cabinet contain selected item");
console.log(cargoHold.includes);
cargoHold.includes("cabinet does not contain selected item");
console.log(cargoHold.includes());