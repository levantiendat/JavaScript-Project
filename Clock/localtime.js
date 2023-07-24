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
time.style.color = 'green';
var date = document.getElementById("day");
date.style.color = 'blue' ; 

var clockTime = function(){
    var local = new Date();

    var day = local.getDate();
    var month = local.getMonth() + 1;
    var year = local.getFullYear();

    var hour = local.getHours();
    var min = local.getMinutes();
    var sec = local.getSeconds();

    if(hour < 10){
        hour = '0' + hour;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }

    if(day < 10){
        day = '0' + day;
    }

    if(month < 10){
        month ='0' + month;
    }

    time.innerText = hour + ":" + min +":"+sec;
    date.innerText = day + " / " + month + " / " + year;
}
clockTime();
setInterval(clockTime,10);