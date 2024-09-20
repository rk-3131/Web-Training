console.log("This is for the type conversions");

// string to numbers

let str1 = "4646.2";
let str2 = "445 is number";
let str3 = "number is 445";
let str4 = "number";

console.log(Number(str1));
console.log(Number(str2));
console.log(Number(str3));
console.log(Number(str4));

// by using the parseInt method
// parse float can also be used for the type conversions here

console.log(Number.parseInt(str1));
console.log(Number.parseInt(str2));
console.log(Number.parseInt(str3));
console.log(Number.parseInt(str4));

// operation by using the unary operator can also be used for the type conversion of the string to number

// numbers to string

let num1 = 465464;

console.log(String(num1));
console.log(String(100+235));
console.log(num1.toString());
// Direct using the String constructor or using the toString method can be used for the conversion of the number to string

// the Date() method can also be added with the string and hence it can be converted to the string
// String(date)
// Date().toString()
// All of the above method can be used to convert the string into numbers

// Booleans can also be converted to numbers
console.log(String(false)); // 0
console.log(String(true)); // 1
// Apart from that false.toString() or true.toString() will also return the simillar result

// js can also be used for the automatic type conversions and hence we can use it in the later stages

console.log(5 + null); // here null will be converted to 0
console.log("5" + null); // here null be "null" as string