let clickerCounter = 0;
let clikTime = 0;
let timerLast = 0;
let timerNow = 0;
const cookie = document.getElementById('cookie');
const start = new Date().getTime();
cookie.onclick = function() {
    const end = new Date().getTime();
    timerNow = (end - start)/1000;
    clikTime = (1/(timerNow - timerLast)).toFixed(2);
    timerLast = timerNow;
    clickerCounter += 1;
    document.getElementById('clicker__counter').textContent = `${clickerCounter} Время отклика: ${clikTime}`;
    cookie.width = clickerCounter % 2 ? 250 : 200
};