let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = h + ":" + m + ":" + s;
}

function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("start").addEventListener("click", function(){

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);

});

document.getElementById("pause").addEventListener("click", function(){

    clearInterval(timer);

});

document.getElementById("reset").addEventListener("click", function(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

});

updateDisplay();