let timer = 59
let timerCount = setInterval(() => 
    {
        if (timer > 0) {
            timer -= 1;
            document.getElementById('timer').textContent = timer;
        } else {
            alert('Вы победили в конкурсе')
            clearInterval(timerCount);
        }
    }
, 1000);
