let countdown = document.getElementById("countdown");
let settime = document.getElementById("settime").value;
let btnstart = document.getElementById("btnstart");
let btnstop = document.getElementById("btnstop");
// let a=0;
let timeinterval = setInterval(function(){
    if(settime > 0 ){
        settime --;
        countdown.innerText = settime;
        if(settime == 0){
            countdown.innerText = "Time's Up";
        }
    }
    if(settime < 0 ){
        settime ++;
        countdown.innerText = settime;
        if(settime == 0){
            countdown.innerText = "Time's Up";
        }
    }
},1000)

btnstart.onclick() = function(){ 
    timeinterval;
}
