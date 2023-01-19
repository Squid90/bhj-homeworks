const modal = document.getElementById('modal_main')
modal.classList.toggle('modal_active');

const modalClose = [...document.querySelectorAll('.modal__close')];
const modalSucces = document.getElementById('modal_success');
const showSucces = document.querySelector('.show-success');

modalClose.forEach((element) => {
    const parent = element.closest('.modal');
        element.onclick = function() {
            parent.classList.toggle('modal_active');
        };
    }
);

 showSucces.onclick = function() {
    modal.classList.toggle('modal_active');
    modalSucces.classList.toggle('modal_active');
 };
