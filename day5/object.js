const emp = {
    name: "Abhay",
    salary: 100,
    display: function(){
        console.log("this is my name: "+ this.name);
        console.log("this is my salary: " + this.salary);
    },
    in_sal: function(){
        this.salary = this.salary + 100;
    },
    show: function(){
        console.log("My name: " + this.name);
        console.log("My salary: " + this.salary);
    }
}


emp.display();
emp.in_sal();
emp.show();

function College(name) {
    this.name = name;

    this.department = {
        name: "CSE",
        hod: "Dr. Sharma"
    };

    this.class = {
        name: "B.Tech",
        students: 60
    };

    this.display = function() {
        console.log("College:", this.name);
        console.log("Department:", this.department.name);
        console.log("Class:", this.class.name);
        console.log("Students:", this.class.students);
    };
}

let c = new College("ABC College");
c.display();