// Initialize Variables below
let astronauts = 7;
let fueltemperature = 250;
let fuelLevel = 7000;
let engineTemperature = 1500;
let engineIndicatorLight;
let totalmass = 850000; 
let weatherstatus = 80 
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronauts > 7) {
    console.log("total number of astronauts > 7");
  } else if (astronauts < 7) {
    console.log("total number of astronauts < 7");
  } else {
    console.log("total number of astronauts = 7");
  }

  // add logic below to verify all astronauts are ready
  if (astronauts > 8  && fuelLevel ===8000 && engineTemperature === 2000 ) {
    console.log("astronauts are ready ");
  } 
   else {
   console.log("astronauts are not ready ");
  }
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalmass  < 900000 ) {
  console.log("total mass is within the range");
}
 else if (totalmass >  800000 ) {
  console.log("total mass is not with in the range");
 }
  
    
// add logic below to verify the fuel temperature is within the appropriate range of 150 and 300
if (fueltemperature < 200 && fueltemperature > 220 ){
    console.log("fueltemperature is not within the appropriate range" ) ;
  } else if ( fueltemperature > 245 && fueltemperature < 300) {
    console.log("fueltemperature is within the appropriate range" ) ;
  }else {
        console.log("fueltemperature is not within the appropriate range");
  }
// add logic below to verify the fuel level is at 100%
if (fuelLevel <= 5000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 100%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }
// add logic below to verify the weather status is clear
 if (weatherstatus < 85){
 console.log("weatherstaus is clear");
} else if (weatherstatus  > 85)  {
  console.log("weatherstatus is not clear"); 
}
// Verify shuttle launch can proceed based on above conditions
if (astronauts >= 7 && totalmass <= 850000  && fueltemperature < 450 &&  weatherstatus === 80 ){
  console.log("shuttle launch");
} else if (astronauts < 7 && totalmass > 850000 && fueltemperature > 450 && weatherstatus !=80){
  console.log("shuttle not ready") };
