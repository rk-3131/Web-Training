console.log("This is for the promises in js");

// promise has two major part
// Producing code is the code which will give the output in given time
// consuming code is the code which will wait until the producing code has not given the output


let myPromise = new Promise(function(myResolved, myReject) {
    let x = 1;

    if (x == 0){
        myResolved("OK");
    }else {
        myReject("Error");
    }
});

myPromise.then (
    function(value){
        console.log(value);
    },

    function(error){
        console.log(error)
    }
);