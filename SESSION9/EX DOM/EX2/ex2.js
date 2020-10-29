let countdown = document.getElementById("countdown");
let settime = document.getElementById("settime");
let btnstart = document.getElementById("btnstart");
let btnstop = document.getElementById("btnstop");

let setTimer;
btnstart.onclick = function(){
    
    let valueCount = settime.value;
    setTimer = setInterval(function(){
        if(valueCount > 0 ){
            valueCount --;
            countdown.innerText = valueCount;
            if(valueCount == 0){
                countdown.innerText = "Time's Up";
            }
        }
        if(valueCount < 0 ){
            valueCount ++;
            countdown.innerText = valueCount;
            if(valueCount == 0){
                countdown.innerText = "Time's Up";
            }
        }
    },1000)
}

btnstop.onclick = function(){ 
    clearInterval(setTimer);
    countdown.innerText = "Stop!";
}
