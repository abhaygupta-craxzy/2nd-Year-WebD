console.log("==== variables ====");

var Name = "Abhay Gupta";
var Branch = "Ai/Ml-A"
console.log(Name);
console.log(Branch ,"\n");


console.log("===== If-Else =====");
let a = 20;
let b =10;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}


console.log("\n===== Function =====");

function abes(){
    console.log("Welcome Students");
    console.log("Welcome to Node.js");
}

abes();

console.log("\n==== Function with parameters ====");
function greet(fname,lname){
    console.log("Hello,",fname,lname);
    
}
greet("Abhay","Gupta");

console.log("\n==== Default Arguments ====");

function fullName(fname = "Abhay",lname = "Gupta"){
    return fname + " " +lname;
}

console.log(fullName());

console.log(fullName("Abhay","Porwal"));

console.log("\n==== Percentage ====");

function totalMarks(math,english,science){
    return math + english + science;
}

function percentage(total){
    return (total / 300) * 100;
}

var total = totalMarks(80,90,99);

console.log("Total Marks = ",total);

console.log("Percentage =",percentage(total) + "%");

