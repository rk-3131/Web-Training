console.log("This is used in the DOM");

// To access the elements by id in the DOM there is separate method

document.getElementById("id1").innerHTML = "This is the id1 content";
document.getElementById("id2").innerHTML = "This is the id2 content";
document.getElementById("id3").innerHTML = "This is the id3 content";
document.getElementById("id4").innerHTML = "This is the id4 content";
document.getElementById("id5").innerHTML = "This is the id5 content";
document.getElementById("id6").innerHTML = "This is the id6 content";

// Elements can also be given the classname and by using the name of the class we can access the elements in the DOM
const idDiv = document.getElementsByClassName("idManipulation")[0];
console.log(idDiv.innerHTML);

// html elements can also be accessed using the TagName just like given below
const allDiv = document.getElementsByTagName("div");
console.log(allDiv[0].innerHTML);

// They can also been accesed using the css selectors
const cssElement = document.querySelectorAll("div.idManipulation");
console.log(cssElement[0].innerHTML);


const applySmile = () => {
    document.getElementById("emotions").src = "images/smiley.jpg";
}

const applySad = () => {
    document.getElementById("emotions").src = "images/sad.jpg";
}

const timeDisplayer = () => {
    document.getElementById("timer").style.backgroundColor = "aliceblue";
    document.getElementById("timer").style.fontSize = "100px";
    document.getElementById("timer").style.textAlign = "center";
    const dt = new Date();
    let hr = dt.getHours();
    const min = dt.getMinutes();
    const sec = dt.getSeconds();
    let ap = "AM";

    if (hr > 12){
        hr -= 12;
        ap = "PM";
    }

document.getElementById("timer").innerHTML = `${hr.toString().padStart(2,"0")} : ${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2, "0")} ${ap}`;
}

setInterval(timeDisplayer, 1000);

