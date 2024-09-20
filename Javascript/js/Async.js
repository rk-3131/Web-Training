console.log("Here asyncrnous task will be performed");


const saySomething = () => {
    document.getElementById("time1").innerHTML = "Hey you waited for me";
    document.getElementById("time1").style.background = "Yellow";
    document.getElementById("time1").style.fontSize = "40px";

    document.getElementById("myimg").style.width = "50%";
}

setTimeout(saySomething, 5000);

const printClock = () => {
    const dt = new Date()
    const hr = dt.getHours();
    const min = dt.getMinutes();
    const sec = dt.getSeconds();

    document.getElementById("time2").innerHTML = `${hr} : ${min} : ${sec}`;
    document.getElementById("time2").style.background = "Yellow";
    document.getElementById("time2").style.fontSize = "40px";
}

setInterval(printClock, 1000);