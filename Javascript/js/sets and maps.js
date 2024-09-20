console.log("This is for the sets");

// Sets are the data structure which are used to store the unique values in it

// set can be created and used in two ways

const set1 = new Set([1,2,3,4,5,6,7]);

const set2 = new Set();

set2.add(1);
set2.add(1);
set2.add(2);
set2.add(1);
set2.add(3);
set2.add(1);

// as the set only stored the unique values hence look at the size of the sets

console.log(set1.size);
console.log(set2.size);

// listing of the set elements can be done using for of loops
console.log("Elements of set 1");
for (let i of set1){
    console.log(i);
}

console.log("Elements of set 2");
for (let i of set2){
    console.log(i);
}

// sets are also object as of array and other objects in js


// has is the method which is used to check if the value is present in the set oe not

for (let i = 0; i < 10; i++){
    if (set1.has(i)){
        console.log(i + " --> " + true);
    }else {
        console.log(i + " --> " + false);
    }
}


// for each method
set1.forEach(function(value){
    console.log(value);
});

// by using the values function we can get all the values inside the set into an iterator which later can be used to add and use it in the later stages of the function
// as the set has no keys hence it returns the values and not the keys
// the entries method return the value value pair and hence we can the pair of value and value
// it makes the set compative with the map while iterating

// map

// maps are used to store the data in the key value pair 
// maps rememeber the actual order of insertion in the data structure

// maps can be used by using two ways the ways are such that 

const map1 = new Map([
    ["RK", 100], 
    ["Piyush", 101],
    ["Avi", 102], 
    ["Sush", 103], 
    ["Saurabh", 104]
]);

const map2 = new Map();
map2.set("RK", 100);
map2.set("Piyush", 100);
map2.set("Avi", 100);
map2.set("Sush", 100);
map2.set("Saurabh", 100);

console.log(typeof map1);
// map is also the object type

// set method can also be used to set the value of the existing method in js

console.log(map1.get("Piyush"));
// it is used to get the exact value of that key in js

console.log(map1.size);
// it is used to get the number of elements in the maps 

map1.delete("Piyush");
// This is used to delete the map elements in the map

map2.clear();
// now it has erased all the elements from the map
console.log(map2.size);

console.log(map1.has("Piyush"));



map1.set("Piyush", 100);
console.log(map1.has("Piyush"));
console.log(map2.has("Piyush"));


map1.forEach(function(val, key) {
    console.log(key + " --> " + val);
});

for (let [key, val] of map1.entries()){
    console.log(key +" --> "+val);
}


// map1.keys() and map1.values() are the methods which can be used by us and hence we can later use them

// we can even use the object as the key in js
// one thing to make sure is that the key has to be accessed like the object witout string 

const ob1 = {name : "Object1"};
const ob2 = {name : "Object2"};
const ob3 = {name : "Object3"};
const ob4 = {name : "Object4"};

const map3 = new Map([
    [ob1, "I am object 1"],
    [ob2, "I am object 2"],
    [ob3, "I am object 3"],
    [ob4, "I am object 4"],
]);

console.log(map3.get(ob1));
console.log(map3.get("ob1"));
// above one line of code will give us the undefined

