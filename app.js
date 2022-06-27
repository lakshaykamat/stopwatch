let tensEl = document.getElementById('tens')
let secondsEl = document.getElementById('seconds')
let minEl = document.getElementById('min')

let minute = 0
let seconds = 0
let tens = 0
let timer = false;
function startTimer(){
    timer = true;
        stopWatch()
}
function stopTimer(){
    clearInterval(interval);
    timer = false;
}
function resetTimer(){
    timer = false
    clearInterval(interval);
    tens = 0
    minute = 0
    seconds = 0
    tensEl.textContent = "0" + tens
    minEl.textContent = "0" + minute
    secondsEl.textContent = "0" + seconds
}
function stopWatch(){
    //if condition true below code will execute
    if(timer === true){

        // if timer is true then tens wil increment by 1
        tens++
        // if tens will be less than or equal to 9 than add 0 as a string
        if(tens <= 9){
            tensEl.textContent = "0" +  tens
        }
        // if tens will be greater than or equal to 10 than remove 0 that added above
        if(tens >= 10){
            tensEl.textContent = tens
        }
        // if tens is equal to 99 than increment second by 1 and tens 0

      //    SECONDS
        if(tens == 99){
            tens = 0
            seconds++
            //if seconds will be less than or equal to 9 than add 0 as a string
            if(seconds <= 9){
                secondsEl.textContent = "0" + seconds
            }
            // if seconds will be greater than or equal to 10 than remove 0 that added above
            if(seconds >= 10 ){
                secondsEl.textContent = seconds
            }
            // if seconds is equal to 99 than increment minute by 1 and tens 0
            
            //  MINUTE
            if(seconds === 59){
                seconds = 0
                minute++
                //if minute will be less than or equal to 9 than add 0 as a string
                if(minute <= 9){
                    minEl.textContent = "0" + minute
                }
                // if minute will be greater than or equal to 10 than remove 0 that added above
                if(minute >= 10){
                    minEl.textContent = minute
                }
            }
        }
        interval = setTimeout(startTimer, 10)
    }
    else{
        console.log("SToped")
    }
    }