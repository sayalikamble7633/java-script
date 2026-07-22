const prompt = require("prompt-sync")();

let n=Number(prompt("Enter a number:"));
let i=1;

while(i <= n) {
    console.log(i);
    i++;
}