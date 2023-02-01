const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let date = new Date();
let hoursTime = date.getHours();
(hoursTime < 10) ? hoursTime = '0' + hoursTime : hoursTime;
let minutesTime = date.getMinutes();
(minutesTime < 10) ? minutesTime = '0' + minutesTime : minutesTime;

const robotMessages = [
    `<div class="message">
        <div class="message__time">${hoursTime}:${minutesTime}</div>
        <div class="message__text">Добрый день, мы ещё не проснулись. Позвоните через 10 лет</div>
    </div>`,
    `<div class="message">
        <div class="message__time">${hoursTime}:${minutesTime}</div>
        <div class="message__text">У нас все хорошо, а у Вас?</div>
    </div>`,
    `<div class="message">
        <div class="message__time">${hoursTime}:${minutesTime}</div>
        <div class="message__text">Мне некогда Вам отвечать!</div>
    </div>`,
    `<div class="message">
        <div class="message__time">${hoursTime}:${minutesTime}</div>
        <div class="message__text">У нас выходной, все улетели в горы :)</div>
    </div>`
];


chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatInput.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        if (chatInput.value.trim() === '') {
            alert('Введите сообщение');
        } else {
            messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hoursTime}:${minutesTime}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
            `;
            chatInput.value = '';
            let rand = Math.floor(Math.random() * robotMessages.length);
            messages.innerHTML += robotMessages[rand];
        }
    }
});