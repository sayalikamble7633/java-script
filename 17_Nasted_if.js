const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age:"));
let license = prompt("Do you have a license?(yes/no):");

if(age>=18){
    if(license=="yes"){
        console.log("you can drive.");
    }
    else{
        console.log("Get a license first.");
    }
}
    else{
        console.log("You are under age.");
    }
