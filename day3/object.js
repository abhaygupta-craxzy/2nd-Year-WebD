console.log("===== Object =====");

const student = {
    id: 102,
    name: "Abhay",
    age: 20
};

console.log(student);
console.log(student.id);
console.log(student.name);
console.log(student.age);



console.log("====== Array Of Object ======");
const info = [{id:101,name:"Abhay",age:20},{id:102,name:"Aditya",age:20}];
console.log(info);



console.log("====== Object Method ======");

const emp = {
    id: 102,
    name: "Abhay",
    age: 20,
    display: function(){
        console.log("ID:",this.id);
        console.log("Name:",this.name);
        console.log("Age:",this.age);
    }
};
emp.display();


