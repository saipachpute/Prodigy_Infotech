
T = {} ;
T.timerDiv = document.getElementById('timer');

function displayTimer() {

  let hours='00', minutes='00',
  miliseconds=0, seconds='00',
  time = '',
  timeNow = new Date().getTime(); 

  T.difference = timeNow - T.timerStarted;


  if(T.difference > 10) {
    miliseconds = Math.floor((T.difference % 1000) / 10);
    if(miliseconds < 10) {
      miliseconds = '0'+String(miliseconds);
    }
  }
  
  if(T.difference > 1000) {
    seconds = Math.floor(T.difference / 1000);
    if (seconds > 60) {
      seconds = seconds % 60;
    }
    if(seconds < 10) {
      seconds = '0'+String(seconds);
    }
  }


  if(T.difference > 60000) {
    minutes = Math.floor(T.difference/60000);
    if (minutes > 60) {
      minutes = minutes % 60;
    }
    if(minutes < 10) {
      minutes = '0'+String(minutes);
    }
  }

 
  if(T.difference > 3600000) {
    hours = Math.floor(T.difference/3600000);
    
    if(hours < 10) {
      hours = '0'+String(hours);
    }
  }

  time  =  hours   + ':'
  time += minutes + ':'
  time += seconds + ':'
  time += miliseconds;

  T.timerDiv.innerHTML = time;
}

function startTimer() {
 
  T.timerStarted = new Date().getTime()
  console.log('T.timerStarted: '+T.timerStarted)

  if (T.difference > 0) {
    T.timerStarted = T.timerStarted - T.difference
  }
 
  T.timerInterval = setInterval(function() {
    displayTimer()
  }, 10);


  document.getElementById('go').style.display="none";
  document.getElementById('stop').style.display="inline";
  document.getElementById('clear').style.display="none";
}

function stopTimer() {
  clearInterval(T.timerInterval); 

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="inline";
}

function clearTimer() {
  clearInterval(T.timerInterval);
  T.timerDiv.innerHTML = "00:00:00:00";
  T.difference = 0;

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="none";
}