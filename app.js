let seconds = 00;
let tens = 00;
let minute = 00;
let getMinute = document.querySelector('.minute');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let buttonStart = document.querySelector('.btn-start');
let buttonStop = document.querySelector('.btn-stop');
let buttonReset = document.querySelector('.btn-reset');

buttonStart.addEventListener('click', ()=>{
   interval = setInterval(startTimer,.10)
})
buttonStop.addEventListener('click',()=>{
    clearInterval(interval);
})
buttonReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minute = '00'
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinute.innerHTML = minute;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = "0" +  seconds;
        tens = "0";
        getTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds == 59){
        minute++;
        getMinute.innerHTML = "0" + minute;
        seconds = seconds * 0;
        getSeconds.innerHTML = "0" + seconds ;
    }
    if(minute >9){
        getMinute.innerHTML = minute;
    }
}