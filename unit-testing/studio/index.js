
let launchcode = {
    organization : "nonprofit",
    executiveDirector :"Jeff",
    percentageCoolEmployees : 100,
    programsOffered :["Web Development", "Data Analysis", "Liftoff"],
    launchcode: function(num){

if(num % 2 === 0){
    return "Launch!";
}
else if(num % 3 === 0){
    return "Code!";
}
else if (num % 5 === 0){
    return "Rocks!";
}

   else if (num % 2,5 === 0){
    return "Launch Rocks! (CRASH!!!!)";
}
else if (num % 3,5 === 0){
    return'Code Rocks!' ;
}
else if (num % 3,5 === 0){
    return'Code Rocks!' ;

}
};
module.exports = launchcode;

