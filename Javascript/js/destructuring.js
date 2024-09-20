console.log("Destructuring");

// destructuring is used for taking the variables inside of the object or the array outside
// so that we dont need to access them by using the name of the object or the array everytime we want to aceess them

const obj1 = {
    name : "Radhakrushna", 
    age : 22, 
    marks : 100, 
    city : "Nagpur"
}

// now if we want to access the properties from the obj1 then we have to use the name the object everytime 

console.log(obj1["name"]);
console.log(obj1["age"]);
console.log(obj1["marks"]);
console.log(obj1["city"]);

// but what if we need to access them everytime 

let {name, age, city} = obj1;

// now all the values mentioned in the curly brackets from the obj1 are destructured and we can use them directly without the name of object

console.log(name);
console.log(age);
console.log(city);
// console.log(marks);
// marks will give us the error as it is not mentioned in the destructuring format

// simillarly destructuring of the string and arrays can be done into the specified variable
// , , , ,  is used to skip the variables and hence we can even go to the last element
// []:name1, []:name2 this kind of destructuring can be used in the to only acess from specific index


const arr = [5,4,3,2,1,4,8,7,9,6,6546];

let [f, s, t,,,o] = arr;

console.log(f);
console.log(s);
console.log(t);
console.log(o);


// by using the concept of destructuring we can swap the two variables

let first = 10;
let last= 20;
console.log("first : " + first);
console.log("last : " + last);
[first, last] = [last, first];
console.log("first : " + first);
console.log("last : " + last);


