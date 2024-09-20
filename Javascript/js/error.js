"use strict";

console.log("This is for the error handling");

let x = 452;

try {
    // throw "This is the custome error by me!";
    let ans = (x / 0);
    console.log(ans);
}
catch(err) {
    console.log(err);
}
finally {
    console.log("This will execute regardless of the execution of try and catch block");
}