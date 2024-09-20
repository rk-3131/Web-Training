console.log("This is for the dates");

function getDateTime() {
    document.getElementById("dt").innerHTML = new Date();
}

// dates are created and used by using the Date() object and hence by using which we can get the current time and date of the browser

// We can even add and create the date manually and use it in js

// new Date()

// based on the list of parameters that we will be giving we can define what are we giving to the function

/*
new Date('yyyy-mm-dd')
new Date(year, month, day, hours, min, sec, milsec)
in this manner we can keep on reducing the parameter from the end and get the exact results
but at the end of the removing each parameter at least two paramaters has to be given otherwise it will consider it as millisecond
Year parameter written in single or double digits can be used to add dates in the previous century
But if it is added as the string then it will be considered as the year
The milisecond parameter adds the respected number of miliseconds to the 1970 jan 1 and hence it goes on
*/

function getDateString(){
    let myDt = new Date();
    document.getElementById("dt").innerHTML = myDt.toDateString();
}

function getUTCString(){
    let myDt = new Date();
    document.getElementById("dt").innerHTML = myDt.toUTCString();
}

function getFixedDate(){
    let myDt = new Date('May 15 2002');
    document.getElementById("dt").innerHTML = myDt.toDateString();
}

function getFullYear(){
    let myDt = new Date();
    // myDt.setFullYear(2002);
    document.getElementById("dt").innerHTML = myDt.getFullYear();
}
function getMonth(){
    let myDt = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const index = myDt.getMonth();
    document.getElementById("dt").innerHTML = months[index];
}
function getDate(){
    let myDt = new Date();
    // myDt.setDate(25);
    document.getElementById("dt").innerHTML = myDt.getDate();
}
function getDay(){
    let myDt = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const index = myDt.getDay();
    document.getElementById("dt").innerHTML = days[index];
}
