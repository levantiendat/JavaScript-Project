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

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var settime = document.getElementById("settime");
var Interval;


var time = document.getElementById("time");
time.style.color='orange';

var web_hour;
var web_min;
var web_sec;

var hour = 0;
var min = 0;
var sec = 0;
var mili = 0;


settime.onclick = function(){
    web_hour = parseInt(document.getElementById('hour').value);
    web_min = parseInt(document.getElementById('minute').value);
    web_sec = parseInt(document.getElementById('second').value);

    hour = web_hour;
    min = web_min;
    sec = web_sec;
    mili = 0;
    time.style.color='purple';
    
    setTime();
}

var setTime = function(){
    var hours = hour;
    var mins = min;
    var sec1 = sec;
    var milis = mili; 
    if(hours<10){
        hours='0'+hours;
    }
    if(mins<10){
        mins='0'+mins;
    }
    if(sec1<10){
        sec1='0'+sec1;
    }
    if(milis<10){
        milis='0'+milis;
    }
    time.innerText=hours+":"+mins+":"+sec1+"."+milis;
}

stop.onclick = function(){
    clearInterval(Interval);
    time.style.color='orange';
}
reset.onclick = function(){
    time.style.color='blue';
    clearInterval(Interval);
    hour = web_hour;
    min = web_min;
    sec = web_sec;
    mili = 0;
    
    setTime();
}

start.onclick = function(){
    time.style.color='green';
    clearInterval(Interval);
    Interval= setInterval(startClock,10);
}

var startClock = function(){
    if ((hour == 0 && min == 0) && second < 10){
        time.style.color='red';
    }
    if(mili == 0){
        if(sec == 0){
            if(min == 0){
                if(hour == 0){
                    clearInterval(Interval);
                    alert("TIME OUT!");
                    return;
                }
                hour-- ;
                min =59;
            }
            else{
                min--;
            }
            sec=59;
        }
        else{
            sec--;
        }
        mili=99;
    }else{
        mili--;
    }
    
    setTime();
    
    
}