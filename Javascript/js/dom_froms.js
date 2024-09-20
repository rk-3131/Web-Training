

console.log("This is used to check the HTML form in JS");

const formObject = document.getElementById("myForm");

formObject.addEventListener('submit', (mForm) => {
    mForm.preventDefault();

    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    console.log(fName.value);
    console.log(lName.value);
    console.log(email.value);
    console.log(age.value);
})