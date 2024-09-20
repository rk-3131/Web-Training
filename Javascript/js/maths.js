console.log("This is used for the maths");

console.log(Math.E);
// euler's number
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);


let number = 445.154654;

console.log(number);
console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.trunc(number));
console.log(Math.sign(number));

console.log(Math.pow(8, 3));
console.log(Math.sqrt(625));
console.log(Math.abs(-625));


console.log(Math.sin(270 * (Math.PI / 180)));
console.log(Math.cos(270 * (Math.PI / 180)));

// Math.min and Math.max are used to find the minimum and maximum in the list of the elements given to it

console.log(Math.max(100,12,67464646,154,5465464));
console.log(Math.min(100,12,67464646,154,5465464));

console.log(Math.log(12));
console.log(Math.log2(12));
console.log(Math.log10(12));


// Random in js

// Math.random can get the number between 0(inclusive) and 1(exclusive)

let random1 = Math.random();
console.log(random1);

// get the random integer in the range of 1 to 100
let random2 = Math.ceil(Math.random() * 100);
console.log(random2);


// get the random integer in the range of 0 to 100
let random3 = Math.ceil(Math.random() * 101);
console.log(random3);