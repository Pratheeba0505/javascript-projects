function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
   button.addEventListener("click", function( event ) {
    paragraph.innerHTML = 'Houston! We have liftoff!';
 });
 missionAbort.addEventListener("click", function( event ) {
    event.target.style.backgroundColor = "red";
 });
 missionAbort.addEventListener("mouseout", function( event ) {
    event.target.style.backgroundColor = "";
 });
 missionAbort.addEventListener("click", function( event ) {
  let abort = confirm("Are you sure you want to abort the mission?");
  if(abort== ture){
    paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
  }
  else{
     let url = window.location.href;
     window.open(url)
  }
 });

}

window.addEventListener("load", init);
