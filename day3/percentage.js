let maths = 80;
let english = 75;
let science = 90;

function percentage(x,y,z){
    console.log("Percentage = ",(x+y+z)/3);
}

percentage(maths,english,science);


console.log("====== Array Initialization ======")
let arr = [1,2,3,4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    sum += arr[i]
    console.log(element);
}

console.log("Sum = ",sum);



console.log("====== 2D Array ======");

let student = [["Abhay Gupta", "Male" , "Ai/Ml","90"],["Aditya" , "Male" , "C.S.E","20"],["Shristi", "Female", "IT", "20"]];

console.log("Student Information");
console.log(student);


