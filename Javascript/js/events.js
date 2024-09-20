console.log("This one is the event handler");

function afterSubmit() {
    alert("Your data has been submitted");
}

function afterChanged() {
    console.log("the data is changing");
}

function afterMouseOver() {
    alert("After the mouse is hovered");
}

function afterLoaded() {
    alert("Welcome user");
}

const afterInput = () => {
    let x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
const afterInput2 = () => {
    let x = document.getElementById("lname");
    x.value = x.value.toUpperCase();
}

let afterMouseOverbtn = () => {
    document.getElementById("btn").innerHTML = "Sure?";
}

// we can even add the event by using the js

document.getElementById("btn").addEventListener("click", () => {
    alert("Form data submitted");
});

// by using removeEventListner we can remove that eventListner event

