let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

console.log(names);
// TODO: Write a mapping function
// and pass it to .map()
//let firstInitials = names.map(function(value) {

let firstInitials = names.map(firstletter =>{
    return firstletter [0]});
console.log(firstInitials);
//return ( value.firstInitials);







// let halved = nums.map(function (n){
//     return (n * .5);    
// });
