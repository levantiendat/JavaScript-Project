var btnLocal = document.getElementById("localtime");
var btnStopwatch = document.getElementById("stopwatch");
var btnCountdown = document.getElementById("countdownclock");

btnLocal.onclick = function(){
    window.location.href = 'local-time.html';
}
btnStopwatch.onclick = function(){
    window.location.href = 'stop-watch.html';
}
btnCountdown.onclick = function(){
    window.location.href = 'countdown-clock.html';
}
var time = document.getElementById("time");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var hour = 0;
var min = 0;
var second = 0;
var mili = 0;
time.style.color='blue';

var setTime = function(){
    var hours = hour;
    var mins = min;
    var sec = second;
    var milis = mili; 
    if(hours<10){
        hours='0'+hours;
    }
    if(mins<10){
        mins='0'+mins;
    }
    if(sec<10){
        sec='0'+sec;
    }
    if(milis<10){
        milis='0'+milis;
    }
    time.innerText=hours+":"+mins+":"+sec+"."+milis;
}
var Interval;


startButton.onclick = function(){
    time.style.color='green';
    clearInterval(Interval);
    Interval= setInterval(startClock,10);
}
stopButton.onclick = function(){
    clearInterval(Interval);
    time.style.color='red';
}
resetButton.onclick = function(){
    time.style.color='blue';
    clearInterval(Interval);
    hour = 0;
    min = 0;
    second = 0;
    mili = 0;
    setTime();
}
var startClock = function(){
    if(mili == 99){
        mili=0;
        if(second == 59){
            second = 0;
            if(min == 59){
                min = 0;
                hour++;
            } else min++;
        }
        else{
            second++;
        }
    }
    else{
        mili++;
    }
    setTime();
}

