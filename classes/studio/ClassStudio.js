//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
//1a.class crewcandidate
class CrewCandidate{
    constructor(name, mass ,scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

//2a.add score method
addScore(score)
{
    // 2b.push(array method)
    this.scores.push(score);
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//3a.avgerage method:
average(){
    let sum = 0;
    for(let i=0; i < this.scores.length; i++){
        sum += this.scores[i];
    }
    return Math.round(10 * sum / this.scores.length) / 10;
   
}
//3b.candidate status:
status(){
    let avg = this.average();
    if(avg >= 90){
        return "Accepted";
    }
    else if(avg >= 80){
        return "Reserve";
    }
    else if(avg >= 70){
        return "Probationary";
    }
    else{
        return "Rejected";
    }
}
}
// 1b.object for candidate:

let bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese ',1.5, [93, 88, 97] );
let glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// 1c.assign key/value pair(console):

console.log(bubba);
console.log(bubba.name, bubba.mass, bubba.scores);
console.log(merry);
console.log(merry.name, merry.mass, merry.scores);
console.log(glad);
console.log(glad.name, glad.mass, glad.scores);
// 2c.avg score for bubba:
bubba.addScore(83);
console.log(bubba.scores);

//avg score for merry:
console.log(merry.average());

//3c.candidate avg score:

let candidates = [bubba, merry, glad];
for(let i=0; i < candidates.length; i++){
    console.log(`\n${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
}


// //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

//4.three methods to boost glad gator's status:
let reverseCount = 0;
while (glad.status() !== "Reserve"){
    glad.addScore(100);
    reverseCount++;
}
console.log(`\nIt took${reverseCount} prefect scores to get Glad Gater up to Reserve status!`);
console.log(glad.scores);

let acceptedCount = 0;
while (glad.status() !== "Accepted"){
    glad.addScore(100);
    acceptedCount++;
}
console.log(`\nIt took${acceptedCount} additional prefect scores to get Glad Gater up to Accepted status!`);
console.log(glad.scores);