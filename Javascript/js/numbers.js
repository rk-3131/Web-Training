console.log("This is about numbers");

let num1 = 15455;
let num2 = 454.25;

// These are the only two ways via which numbers can be declared in js

console.log(10 + 20 + "Ram");
console.log(10 + "20");
console.log(10 + "20" + 20);
console.log("100" * "10");
console.log("100" / "10");
console.log("100" - "10");

// The numbers which are in the string form will be converted to numbers in all possible way but they will not be allowed to be numbers when they are getting added
// AT that time they are considered as strings

console.log("100" / "man");
// It will give us the output of NaN which means not a number

console.log(isNaN("100"));
console.log(isNaN(100));
// as both are numbers hence isNaN will return here false as they are numbers
console.log(isNaN("man"));
// This will return true as man is not a number

// numbers should not be declared by using the Object
// reason being the same that the object always return false when compared

// Infinity can be used to set the max and min value that a number can reach in the given time 

// if a number is preceded with the 0 then it will be considered as hex by the js machine

// Number.isInteger and Number.issafeinteger are the methods inside the number class

// BigInt can be used to initialize extremely large numbers

let myInt = BigInt(5645454646465464464);
console.log(myInt);


console.log(num1);

console.log(num1.toString(2));
// string in binary format 
console.log(num1.toString());
// number in decimal form


console.log(num1.toExponential());
// The number in the raised to format

console.log(num1.toPrecision(3));
// gets the number with specified length and after the rounding off

// The Number method in js can be used to create and convert any data type of js into the number
// If it cannot be converted then that will return the value NaN

console.log(Number("12511"));
console.log(Number("12.511"));
console.log(Number("1.2511"));
console.log(Number("12.511"));
console.log(Number("1251.1"));
console.log(Number("Ram"));

console.log(parseInt("Ram"));
console.log(parseInt("465464"));
console.log(parseInt("Ram 476487"));
console.log(parseInt("45646 Ram"));
// This is also used to get the number from the strings
// if it is not able to get the number then the NaN will be returned

// Number.isInteger() is used to check if the number is integer or not
// Number.isSafeInteger() is used to check if the number is safe or not 
// Number.parseFloat() it parses the string and convert it into a float number if it can otherwise it will return NaN 

console.log(Number.EPSILON);
// This is the value of the number 1 and the smalles positive float number in js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


