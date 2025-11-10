class Student {
    
    constructor(name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    
    clone(){
        return new Student(this.name,this.age,this.course);
    }
}

const student1 = new Student("Ritesh",32,"mern stack");
const student2 = student1.clone();
student1.name = "Vijay";

console.log(student1);
console.log(student2);

//output 
//Student { name: 'Vijay', age: 32, course: 'mern stack' }
//Student { name: 'Ritesh', age: 32, course: 'mern stack' }
