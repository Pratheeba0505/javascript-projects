// Declare and assign the variables below
let message  ="Hi ,how are you?";
let n = 250; 
let pi = 3.14;
 
console.log (message);
console.log(n);
console.log(pi);

// Use console.log to print the 'typeof' each variable. Print one item per line.
let message1 ="Hi ,how are you?";
let m = 250;
let x = 3.14;
      
console.log(typeof message1);
console.log(typeof m);
console.log(typeof x);
// Calculate a space mission below 
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;

const milesPerKm = 0.621;

let milesToMars = distanceToMoonKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars/ 24;


// Print the results of the space mission calculations below

console.log( shuttleSpeedMph +  " will take " + "days to reach daysToMars.");


// Calculate a trip to the moon below

let mikesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = distanceToMoonKm / shuttleSpeedMph;
let daysToMoon = hoursToMoon /24;


// Print the results of the trip to the moon belowconst input = require('readline-sync');
console.log(shuttleName + " will take "+ daysToMoon +"days to reach the Moon." );