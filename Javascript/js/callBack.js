console.log("This is in the console of the Async JS");

// Callback functions

// Callback functions in js are the functions which takes another function as parameter and hence after that they call that function and use it later to display or process the output

// callback function can be syncronous or they can be asyncronous
// syncronous are called at a time when the function invoked
// Asyncrnous are called after the functions are called in between they execute some task


// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
  console.log("Performing operation...");
  numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
  console.log("Result: " + (number + 10));
}

mainFunction(callbackFunction);

// CallBack function to get the square of the number in the array

const arr = [1,2,3,4,5,6,7,8,9];

function callbackFunction2(num){
    console.log("This is inside the callback function");
    console.log(num ** 2);
}

function mainFunction2(callBack){
    console.log("This is the main function");
    arr.forEach(callBack);
}

mainFunction2(callbackFunction2);

function myCalculator(n1, n2, callBack){
    console.log("This is inide the main calculator function");
    let sum = n1 + n2;
    callBack(sum);
}

function callBackForSum(sum){
    console.log("This is inside the callBack function");
    console.log(sum);
    console.log("The callback function is returned from here");
}

myCalculator(10,5, callBackForSum);

// Callback function to get the hello World printed given number of times

function mainFunctionForHello(num, callBack){
    console.log("Just entered the main function for hello world");
    for (let i = 0; i < num; i++){
        console.log("Entered in the loop for " + i + "th time");
        callBack();
        console.log("Exited in the loop for " + i + "th time");
    }
}

function callBackForHW(){
    console.log("Hello World");
}

mainFunctionForHello(10, callBackForHW);

// only positive numbers in the array

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function mainForPositive(myNumbers, callBack){
    const pos = [];
    console.log("Entered the main function to get positive numbers");
    for (let i of myNumbers){
        console.log("Checking for the " + i)
        if (callBack(i)){
            console.log(`${i} has been added to the array`);
            pos.push(i);
        }
    }

    return pos;
}

function callBackForPositive(num){
    console.log("Here in the callBack function for negative numbers");
    if (num >= 0){
        return true;
    }

    return false;
}

const posArray = mainForPositive(myNumbers, callBackForPositive);
console.log(posArray);
