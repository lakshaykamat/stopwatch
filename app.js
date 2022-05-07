let seconds = 00;
let tens = 00;
let minute = 00;
// Getting Query
let getMinute = document.querySelector('.minute');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let buttonStart = document.querySelector('.btn-start');
let buttonStop = document.querySelector('.btn-stop');
let buttonReset = document.querySelector('.btn-reset');

//Add eventlistner when click start function setInterval
buttonStart.addEventListener('click', ()=>{
   interval = setInterval(startTimer,.10)
})

//Add event listner when click the stop button to clear interval
buttonStop.addEventListener('click',()=>{
    clearInterval(interval);
})

// add event listner to rest the time
buttonReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minute = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinute.innerHTML = minute;
})

function startTimer(){
    //tens = 0
    tens++;
    //tens = 1
    if(tens <= 9){
        //loop runs when tens is less than or equal to 9
        getTens.innerHTML = "0" + tens;
    }
    //loop runs when tens is greater than 9 
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    // if tens is greater than 99 
    if(tens > 99){
        // seconds = 0
        seconds++;
        // seconds = 1
        getSeconds.innerHTML = "0" +  seconds;
        //reseting tens to 0
        tens = tens * 0;
        // printing tens is 0
        getTens.innerHTML = "0" + tens;
    }
    // if secons is greater than 9 prints secons as it is
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    // if seconds is equal to 59 than add 1 minute
    if(seconds == 59){
        // minute = 0
        minute++;
        // minute = 1
        getMinute.innerHTML = "0" + minute;
        // reseting seconds to 0 by multiplying to 0
        seconds = seconds * 0;
        getSeconds.innerHTML = "0" + seconds ;
    }
    if(minute >9){
        getMinute.innerHTML = minute;
    }
}