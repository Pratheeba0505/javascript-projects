let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;
let commandOverride = true;

// Implement the following checks using if/else if/else statements:

//a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."
if (fuelLevel < 20000 && engineTemperature > 1300 && engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
//b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."
if (fuelLevel < 20000 && engineTemperature > 1300 && engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
//c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."
if (fuelLevel < 20000 && engineTemperature > 1300 && engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel < 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
//d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."
if (fuelLevel < 20000 && engineTemperature > 1300 && engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel > 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel < 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
//e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 
if (fuelLevel > 20000 && engineTemperature > 1100 && engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel > 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel < 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
//f) Otherwise, print "Fuel and engine status pending..." */
if (fuelLevel > 20000 && engineTemperature > 1500 && engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel > 25000 && engineTemperature < 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel < 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature > 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
// Code 5a - 5f here:

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, 
//then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, 
//then the shuttle will launch regardless of the fuel and engine status.
if (fuelLevel > 20000 && engineTemperature > 1500 && engineIndicatorLight === "red blinking"){
    
    commandOverride = 'False'
  } else if (fuelLevel > 25000 && engineTemperature < 2500){
       commandOverride = 'False'
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
        commandOverride = 'true'
    
  } else if (fuelLevel < 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
    commandOverride = 'true'
    
  } else if (fuelLevel > 5000 && engineTemperature > 2500){
  
    commandOverride = 'true'
   
  } else {
        commandOverride = 'False'
     
    if (commandOverride === "true") {
        console.log('commandOverride is true so Cleared to launch!');
     } else if (commandOverride === "False") {
        console.log('commandOverride is false so Launch scrubbed.');
     } }
    
  
     

/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */
if (fuelLevel > 20000 && engineTemperature > 1000 ){
        commandOverride = 'true'
  } else if (fuelLevel > 25000 && engineTemperature < 2500){
       commandOverride = 'False'
  } else if (fuelLevel > 22000 && engineTemperature <= 2500){
        commandOverride = 'true'
    
  } else if (fuelLevel < 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
    commandOverride = 'true'
    
  } else if (fuelLevel > 5000 && engineTemperature > 2500){
  
    commandOverride = 'true'
   
  } else {
        commandOverride = 'false'}
     
  {  if (commandOverride === "true") {
        console.log('commandOverride is true so Cleared to launch!');
     } else if (commandOverride === "False") {
        console.log('commandOverride is false so Launch scrubbed.');
     } 

      
      
    }