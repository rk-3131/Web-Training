console.log("Hey there");

// if else if else

// let age = prompt("Enter the age");

// let ageNum = Number(age);

// if (age < 18){
//     alert("You are a child");
// }else if (age >= 18 && age <= 40){
//     alert("Renew your licence at the age of 40");
// }else{
//     alert("Enjoy the ride");
// }

// switch (ageNum){
//     case 16:
//         alert("Minor licence");
//         break;
    
//     case 18:
//         alert("Get the licence");
//         break;

//     default:
//         alert("Licenced")
//         break
// }


// Loops in js

const arr = [1,2,3,4,5,6,7,8,9,10];

// simple for loop

for (let i = 0; i < arr.length; i++){
    console.log(i + " --> " + arr[i]);
}

// for in loop

for (let i in arr){
    console.log(i + " --> " + arr[i]);
    // here i will be the index present in there and after that arr[i] will get us the element at that index 
}

// simillarly for each can be used in the array

arr.forEach((values, index, arr) => {
    console.log("Key --> " + index + " Value --> " + values + " whole array --> " + arr);
});

// for of in js

for (let x of arr){
    console.log(x);
}
// for of is used to directly get the value without considering the index and all


let i = 0;
while (i < 20){
    console.log("The while loop " + i);
    i++;
}

i = 0;
while (i < arr.length){
    console.log("Array elements using while loop " + arr[i]);
    i++;
}

i = 0;
do {
    console.log("The while loop " + i);
    i++;
}while (i < 20);


i = 0;
do {
    console.log("Array elements using while loop " + arr[i]);
    i++;
}while (i < arr.length);

// break and continue are used just like in any other language





