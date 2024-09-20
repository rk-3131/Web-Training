console.log("This one is used for the class and object template");

class MyInfo {

    constructor(name, yob, marks){
        this.name = name;
        this.yob = yob;
        this.marks = marks;
    }

    getAge() {
        const dt = new Date();
        const year = dt.getFullYear();
        console.log(year);
        return year - this.yob;
    }

    getName(){
        return this.name;
    }
}

let rk = new MyInfo("Radhakrushna", 2002, 100);
const age = rk.getAge();
console.log(age);
console.log(rk.getName());

class ChildOfInfo extends MyInfo{
    constructor(name, yob, marks, city, interest){
        super(name, yob, marks);
        this.city = city;
        this.interest = interest;
    }
    getAllInfo(){
        console.log(`Name of the user is ${this.name} and he\\she is from ${this.city}`);
        console.log(`The age of the person is ${super.getAge()} and person is interested in ${this.interest}`);
    }
}

let rk2 = new ChildOfInfo("Radhakrushna", 2002, 100, "Pune", "Coding");
rk2.getAllInfo();

console.log(rk2.getAge());
console.log(rk2.getName());

class AnotherClass {
    constructor(){

    }

    // setters 
    set age(ag){
        this._age = ag;
    }
    set name(nm){
        this._name = nm;
    }
    set city(ct){
        this._city = ct;
    }
    get age(){
        return this._age;
    }
    get name(){
        return this._name;
    }
    get city(){
        return this._city;
    }
}

let ob3 = new AnotherClass();
ob3.age = 22;
ob3.name = "Radhakrushna";
ob3.city = "Pune";

console.log(ob3.age);
console.log(ob3.name);
console.log(ob3.city);


class StaticTestClass {
    constructor() {

    }

    nonStaticMethod(){
        console.log("This one is non static method and hence it can be invoked by using the name of the objects");
    }

    static staticMethod() {
        console.log("This is the static method which is invoked by using the name of the class only and not using the name of the objects");
    }
}

const obj = new StaticTestClass();
obj.nonStaticMethod();

// obj.staticMethod();
// above line of code will give us the error as that is the static Method and hence it cannot be accessed using the name of the object and it can only be accessed using name of the class

StaticTestClass.staticMethod();

// StaticTestClass.nonStaticMethod();
// Simillarly class is not able to acces the non static method

// If any variable is declared as static then that variable can only be accessed using the static methods only IMP