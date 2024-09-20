console.log("This is for the arrays");

// declaring the array elements

const arr = [10,20,30,40,50,60,70,80,90,100];
// const arr = new Array();
// using both the method we can create the array
// but the first one has to be prefereed over the second one
console.log(arr)

// accessing and changing the array element is same as of other programmming language
console.log(arr[2]);

arr[2] = 454;
console.log(arr[2]);

// Arrays are the objects which have indices in the form of numbers and not in the form of names

console.log(arr);
console.log(arr.length);
console.log(arr.sort());

// looping the array elements

for (let i in arr){
    console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// adding elements at the end of the array
arr.push(564664);
console.log(arr);

// to check if the array is array isArray method is used
console.log(Array.isArray(arr));

// or instance of can be used
console.log(arr instanceof Array);


const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
//   get all the cars name and there models here
let ans = "";
for (let i in myObj.cars){
    ans += "Company --> ";
    let company = myObj.cars[i].name;
    ans += company;

    ans += " models -> ";
    for (let j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]);
        ans += " " + myObj.cars[i].models[j];
    }
    ans += "<br>";
}

console.log(ans);

// Array methods

console.log(arr.length);

console.log(arr.toString());

console.log(arr.indexOf(90));

console.log(arr.join("-->"))

console.log(arr.pop());
console.log(arr);


console.log(arr.shift());

console.log(arr.unshift(11));
console.log(arr);


// elements can be deleted using the delete keyword in Array
// but the delete leaves the undefined block in the array
let arr2 = [45,54,84,6,5,4];

const arr3 = arr.concat(arr2);
console.log(arr3);

// copywithin is a method which is used to copy the elements to a given index from the given index to the another given index 

// Copy to index 2, all elements from index 0:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1);
fruits1.copyWithin(2, 0);
console.log(fruits1);

// Copy to index 2, the elements from index 0 to 2:
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits2);
fruits2.copyWithin(2, 0, 2);
console.log(fruits2);

console.log(fruits2.find(findBanana));

function findBanana(str){
  return str === "Banana";
}
// .flat() is the method which is used to convert the 2d array to 1d array 

// splice is used to add elements to the array
arr2.splice(3, 0, "One", "two");
// Splice takes arg as 1. at which index new elements has to be added 2. how many elements to remove 3. all the elements that has to be added into it
// we can even use the toSpliced method which will return the new array after the change and original array will remain as it is

// slice is used to retrive the part of the string and hence we can get the part of the array based on the indices present there

// to search in the array there are certain methods which are 
// indexOf(element, startIndex(0 default)) gets the position of element -1 if not present 
// same in case of lastIndex of

// includes returns true if the element is present in the array


// sort method sort the elements alphabetically
// reverse can be used to reverse the array
// tosorted is another method which is used to get the array elements such that the elements will be sorted and this returns the new array and existing array is not changed
// same for the toreversed()

// by default the array elements sort the array alphabetically but it can be modified to sort in numerical order
console.log(arr3);
const sorted = arr3.sort((a, b) => {
  return a - b;
})
console.log("The array after the sorting");
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
console.log(arr3);

// Array elements can be printed by using different methods

const numbers = [45, 4, 9, 16, 25];
console.log("The for each method in array");
console.log("For each using the normal function");
numbers.forEach(function(value, index) {
  console.log(index + " --> " + value)
});

console.log("For each using the arrow function");
numbers.forEach((val, index) => {
  console.log(index + " --> " + val);
})

const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(function(value) {
//   return value ** 2;
// });

const numbers2 = numbers1.map((val) => {
  return val * 3;
})
console.log("The original array "+numbers1);
console.log("The mapped array "+numbers2);



const numbers3 = [45, 4, 9, 16, 25];
// const over30 = numbers3.filter(function(value) {
//   return value > 30
// });

const over30 = numbers3.filter((val) => {
  return val > 30;
})
console.log("The original array "+numbers3);
console.log("The filtered array "+over30);


const numbers4 = [45, 4, 10, 16, 25];
// let ans1 = numbers4.reduce(function(ans, value){
//   return ans + value;
// });
let ans1 = numbers4.reduce((ans, val) => {
  return ans + val;
})
console.log("The original array "+numbers4);
console.log("Sum of elements "+ ans1);



// simmillaryly every is used to check if all the elements in the array are passing the given criteria
// If it is passing the given criteria then it will give us true otherwise it will be false

let isAbove50 = numbers4.every((val) => {
  return val > 50;
})

console.log(isAbove50);

// some is used to check if some values satisfy the condition or not

let someAbove30 = numbers4.some((val) => {
  return val > 30;
})

console.log(someAbove30);

const arr5 = Array.from("123456789");
console.log(arr5);
// this is used to create the array using the string given to it

let keys = arr5.keys();
let vals = arr.entries();

for (let x of keys){
  console.log(x + " --> " + arr[x]);
}

for (let x of vals){
  console.log(x);
  // it has the 2d array with the element with index element form
}