// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    let altitude = 0;
    let rocketpositionX = 0;
    let rocketpositionY = 0;
    const takeoffButton = document.getElementById('takeoff');
    const landButton= document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');


const flightStatus = document.getElementById('flightStatus');
const shuttleBackground = document.getElementById('shuttleBackground');
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

const rocket = document.getElementById('rocket');
 
takeoffButton.addEventListener("click", function(){

let shouldTakeoff = confirm("Confirm that the shuttle is ready for takeoff." );
if(shouldTakeoff){
    flightStatus.innerHTML = "Shuttle in flight.";
    shuttleBackground.style.backgroundColor = "blue";
    altitude =10000;
    spaceShuttleHeight.innerHTML = altitude;
    rocketpositionY += 10;
    rocket.style.marginBottom = rocketpositionY + 'px';
}

});
landButton.addEventListener("click",function(){
alert("The shuttle is landing. Landing gear engaged.");
flightStatus.innerHTML = "The shuttle has landed.";
/*shuttleBackground.style.backgroundColor = "green";
altitude = 0;
spaceShuttleHeight.innerHTML = altitude;
rocketpositionX = 0;
rocketpositionY = 0;
rocket.style.marginLeft = rocketpositionX + 'px';
rocket.style.marginBottom = rocketpositionY +'px';*/
resetRocket();
});
abortButton.addEventListener("click", function(){
let shouldAbort = confirm("Confirm that you want to abort the mission.");
if(shouldAbort){
    flightStatus.innerHTML = "Mission aborted.";
    /*shuttleBackground.style.backgroundColor = "green";
    altitude = 0;
    spaceShuttleHeight.innerHTML = altitude;*/
    resetRocket();
}
});
document.addEventListener("click", function(){
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
if(event.target.id === "left" && rocketpositionX  > -(bkgWidth / 2 )-40){
rocketpositionX -= 10;
rocket.style.marginLeft = rocketpositionX + 'px';
}
if(event.target.id === "right"&& rocketpositionX  > -(bkgWidth / 2 )-40){
    rocketpositionX += 10;
rocket.style.marginLeft = rocketpositionX + 'px';
}
if(event.target.id === "up"){
    rocketpositionX += 10;
rocket.style.marginBottom= rocketpositionY + 'px';
altitude += 10000;
spaceShuttleHeight.innerHTML = altitude;
}
if(event.target.id === "down"){
    rocketpositionX -= 10;
rocket.style.marginBottom = rocketpositionY + 'px';
altitude -= 10000;
spaceShuttleHeight.innerHTML = altitude;
}
});
function resetRocket(){
    shuttleBackground.style.backgroundColor = "green";
altitude = 0;
spaceShuttleHeight.innerHTML = altitude;
rocketpositionX = 0;
rocketpositionY = 0;
rocket.style.marginLeft = rocketpositionX + 'px';
rocket.style.marginBottom = rocketpositionY +'px';
}

});

//dfsdfsdfsdf