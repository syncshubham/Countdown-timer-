const days1  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const ChristmasEve = '25 dec 2022';

function countdown(){
const ChristmasDate = new Date(ChristmasEve);
const currentDate = new Date();
const seconds = (ChristmasDate-currentDate)/1000;
const days = Math.floor(seconds/86400);
const hours = Math.floor(seconds/3600) % 24;
const mins = Math.floor(seconds/60) % 60;
const secs = Math.floor(seconds) % 60;

days1.innerHTML = days;
hoursEl.innerHTML = hours;
minutesEl.innerHTML = mins;
secondsEl.innerHTML = secs;
}

countdown();
setInterval(countdown, 1000);

