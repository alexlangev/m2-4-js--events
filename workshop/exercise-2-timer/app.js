//Digital clock
function timeClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10){
        hours = `0${hours}`;
    }

    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    document.getElementById("timeDisplay").innerText = `${hours}:${minutes}:${seconds}`;

    setTimeout(timeClock ,1000)
}
timeClock();


//stopwatch
let minutes = 0;
let seconds = 0;

function tic() {
    seconds ++;
    if (seconds === 60){
        seconds = 0;
        minutes++;
    };
    
    document.getElementById("stopwatchDisplay").innerText = `${minutes} min : ${seconds} sec`;
}

function start(){
    let going = setInterval(tic,1000);
    document.getElementById("stopwatchButton").removeEventListener("click", start);
    document.getElementById("stopwatchButton").addEventListener("click", function(){
        clearInterval(going);
    });

}

document.getElementById("stopwatchButton").addEventListener("click", start);

//Countdown
secondsAmount = 0;

function countdownStart(){
    let secondsAmount = Number(document.getElementById("timeWanted").value);
    console.log(secondsAmount);

    function toc() {
        secondsAmount--;
        document.getElementById("timerDisplay").innerText = `${secondsAmount} sec`;
        if(secondsAmount === 0){
            clearInterval(countdown);
            window.alert("Finished!!!");
        }
    }
    
    let countdown = setInterval(toc,1000);
}


