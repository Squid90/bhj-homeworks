const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const xhrGet = new XMLHttpRequest();
xhrGet.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhrGet.send();
let answerId = 0;
xhrGet.addEventListener('readystatechange', () => {
    if (xhrGet.readyState === xhrGet.DONE) {
        const id = JSON.parse(xhrGet.responseText).id;
        const question = JSON.parse(xhrGet.responseText).data.title;
        const answers = JSON.parse(xhrGet.responseText).data.answers;
        pollTitle.textContent = question;

        answers.forEach(element => {
            pollAnswers.innerHTML += `
                <button class="poll__answer">
                    ${element}
                </button>
            `;
        });
        const buttons = [...document.querySelectorAll('.poll__answer')];
        
        
        buttons.forEach(element => {
            element.addEventListener('click', () => {
                element.classList.add('poll__answer__active');
                const i = (item) => item.classList.contains('poll__answer__active');
                answerId = buttons.findIndex(i);
                element.classList.remove('poll__answer__active');
                alert('Спасибо, ваш голос засчитан!');
                
                const xhrPost = new XMLHttpRequest();
                xhrPost.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrPost.send( `vote=${id}&answer=${answerId}` );
                xhrPost.addEventListener('readystatechange', () => {
                    if (xhrPost.readyState === xhrPost.DONE) {
                        //pollAnswers.outerHTML = '';
                        const stat = JSON.parse(xhrPost.responseText).stat;
                        stat.forEach(element => {
                            pollAnswers.innerHTML += `<p>${element.answer}: <b>${element.votes}</b></p>`
                        })
                        
                    };
                });
            });
        });
    };
});