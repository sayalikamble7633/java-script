const prompt = require("prompt-sync")();

let marks = Number(prompt("Enter your mark:"));

if(marks >=90){
    console.log("Grade A");
}
else if(mark >=75){
    console.log("Grade B");
}
else if(mark >=50){
    
    console.log("Grade c");
}
else{
    console.log("fail");
}
