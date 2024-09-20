console.log("This is used to check the functions in js");

function myFunction() {
    console.log("Hey I am from the function myFunction");
}

function returnFunction() {
    return 99 + 99;
}

function params(n1, n2) {
    return (n1 + n2) / 2;
}
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();

let var1 = returnFunction();

console.log(var1);


let avg = params(100, 300);
console.log(avg);


// Arrow function 

// they are not suitable for defining the object methods
// they must be defined before they are used
// simple hello world function

const fun1 = () => {
    console.log("This is the fun1");
}

fun1();
fun1();
fun1();
fun1();

const fun2 = () => {
    console.log("This is used for the concept of arrow function");
}

fun2();
fun2();
fun2();

// Arrow function for the sum of two numbers

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(10, 12));



// arraow function to get the table of a number

const table = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " X " + i + " = " + num * i);
    }
}

table(12);

const anotherFun = (p1, p2, p3) => {
    // console.log(arguments.length);
    return (p1 + p2 + p3) / 3;
}

console.log(anotherFun(1, 2, 3));
console.log(myFunction.toString());

// use of this keyword is different in both the normal function and the arrow function 

// self invoking function 

(function () {
    console.log(`This is from the self invoking function`);
})();
// After the function has been defined and declared we can use () to invoke the function

// functions are also the ojects

// if the number of arguments given to function are less than that of the parameters then rest of the parameters are considered to be undefined

const myFun1 = (a, b, c = 10) => {
    return a + b + c;
}

console.log(myFun1(50, 50, 50));
console.log(myFun1(50, 50));
// in the above call last argument was not given hence the function took the default value of the parameter given in there


const multipleInput = (...args) => {
    let ans1 = 0;

    for (let i = 0; i < args.length; i++) {
        ans1 += args[i];
    }
    return ans1;
}

console.log(multipleInput(10, 10, 10, 10, 10, 10, 100, 10));


// In the below line of code the function is declared and it has not given any paramters but the arguments.length is used to get the length of all the arguments caling with each arguments based on the index that it may persist
function sumAll() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}
const x = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(x);

// Objects are passed by reference and other variable paramaters are passed by value


// we can use the call method to get the output from the method in a object

const person = {
    firstName: "RK",
    lastName: "Mahadik",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Piyush",
    lastName: "More", 
    age : 22
}
const person2 = {
    firstName: "Saurabh",
    lastName: "Nikam"
}

let v1 = person.fullName.call(person1);
// Here we wanted to get the result from the person but the data has to be from the person1 hence here the call function has called the person1
console.log(v1);

let v2 = person.fullName.call(person2);
console.log(v2);

// call method can also be given number of parameters and hence we can get the value out of that parameters as well

// We can even use the apply method to call them
// It is simillar to call but we have to use the array while passing the arguments to the apply


let v3 = person.fullName.apply(person2);
console.log(v3);

// there is a bind method which can also be used for the application of writing the code such that we can borrow methods from other objects

let v4 = person.fullName.bind(person1);
console.log(v4);


