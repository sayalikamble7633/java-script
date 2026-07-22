const prompt = require("prompt-sync")();

let age = Number(prompt("Enter age:"));
let citizen = prompt("Are you an Indian citizen?(yes/no):");

if(age >=18 && citizen =="yes"){
    console.log("Eligible to vote");
} else{
    console.log("Not Eligible");
}