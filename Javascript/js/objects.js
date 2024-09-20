console.log("This one is used to check and use the objects in js");


const myFirst = {
    name: "Radhakrushna",
    city: "Ahmednagar",
    age: 22,
    info: function () {
        return this.name + " from " + this.city + " with age " + this.age;
    }
    // method can also be added to the function in the same way as we add the other variables 
    // myfirst.info = function () {.......}
    // just the way mentioned above
};

const ob2 = new Object();
ob2.name = "Piyush";
ob2.age = 23;
ob2.gender = "Male";
ob2.city = "Pune";


console.log(myFirst.name);
console.log(myFirst["age"]);

// property to the object can be added such that 

myFirst.anotherProp = 101;

console.log(myFirst["anotherProp"]);

// console.log(myFirst['info']);
// console.log(myFirst['info()']);
// Above two ways to invoke a method in object wont work

console.log(myFirst.info());

delete myFirst.anotherProp;
console.log(myFirst["anotherProp"]);
// As the property has been deleted so this is not accessible here and hence it will show undefined

// The objects can also be create in a nested manner
// To access them same way of . or [] can be used


// There are different ways to display objects into the js

// simple way of accessing the properties we have seen it

// Then it can be accessed by using the loops
console.log("Elements of the object");
for (let var1 in myFirst) {
    console.log(var1 + " --> " + myFirst[var1]);
}

console.log("Elements of the object");
let myArray = Object.values(myFirst);
console.log(myArray);

// object entries
console.log("Elements of the object");
for (let [key, value] of Object.entries(myFirst)) {
    console.log(key + " --> " + value);
}

// json.stringify is use to get the elements of the browser in a such way that they are converted to string


// JS object constructor

function Student(name, marks, height, weight) {
    this.name = name;
    this.marks = marks;
    this.height = height;
    this.weight = weight;
    this.nationality = "Indian";
    // This is the default property which need not to be added into the object declaration
}

const o1 = new Student("Radhakrushna", 100, 70, 180);
o1.gym = "true";
// Using the object reference we can add the property to that particular object only
// But if we want to add the property to all the objects using the constructors then we can use the concept of prototype

const o2 = new Student("Piyush", 100, 65, 175);
const o3 = new Student("Saurabh", 100, 55, 170);
console.log("Before adding property to contructor");
console.log(o3.gamers);

Student.prototype.gamers = "Yesss";

const o4 = new Student("Vaibhav", 100, 55, 170);
console.log("After adding property to contructor");
console.log(o3.gamers);
console.log(o4.gamers);
// here the property added after the prototype method is added is also added in there
// by using the name of Constructor and then after that prototype and property we can add the new property to the whole constructor and hence it will be added after that 

// simillarly we can add the method to the constructor and hence after that it can be used

for (let x in o1) {
    console.log(x + " --> " + o1[x]);
}
for (let x in o2) {
    console.log(x + " --> " + o1[x]);
}
for (let x in o3) {
    console.log(x + " --> " + o1[x]);
}

// to add variable value or to add the method to the contructor we need to access it using the prototype keyword

// Object methods

// assign

const source = {
    name: "RK",
    age: 22,
    city: "Nagpur",
    home: "NGR",
    another: "Dummy"
}

const target = {
    name: "Saurabh",
    age: 23,
    myOwn: "My Own"
}

console.log(`Source before`);
console.log(source);
console.log(`Target before`);
console.log(target);

Object.assign(target, source);

console.log(`Source after`);
console.log(source);
console.log(`Target after`);
console.log(target);


// Object.entries() give is the entries in the key value pair
const entries = Object.entries(source);
console.log(entries);

// It can be used to convert the object to map
const map1 = new Map(Object.entries(source));
console.log(map1);

// we can even create the object from the key values pairs present there in the code
const friends = [
    ["Piyush", 100],
    ["Saurabh", 100],
    ["Avi", 100]
];

const objCreated = Object.fromEntries(friends);
console.log(objCreated);

console.log(Object.values(objCreated));
console.log(Object.keys(objCreated));

console.log(objCreated);

// Object can be given the properties from the code using different properties
Object.defineProperty(objCreated, "Sush", {value : 100});
Object.defineProperty(objCreated, "Nachi", {value : 100});
console.log(objCreated);

// by using the define property we can modify the object values inside of the object


console.log(source);

// lets create the object and add the getters and setters to them

const obj6 = {
    name: "RK",
    age: 22,
    city: "Nagpur",
    home: "NGR",
    another: "Dummy", 
    get info() {
        return `Name ${this.name} From ${this.city} and age is ${this.age}`;
    },

    set setKar(naam) {
        this.name = naam;
    }
}
console.log(obj6);
console.log(obj6.info);
obj6.setKar = "Saurabh";
console.log(obj6.info)

// Hence by using the getter and setter we can acces the information as well as modify also 

// There are other object protection method which we can set if we dont want it to be changed by other methods

// adding the object properties is prevented
Object.preventExtensions(obj6);
console.log(Object.isExtensible(obj6));

// adding and deleting the object properties is now not possible
Object.seal(obj6);
console.log(Object.isSealed(obj6));

// Nothing about the object can be chaned now
Object.freeze(obj6);
console.log(Object.isFrozen(obj6));

obj6.setKar = "Ram";
console.log(obj6);
// Here even after the name has to be Ram here the name is not changed because it has been restricted due to other properties


// Since the arrays are also the object hence they can also been prevented from the extension