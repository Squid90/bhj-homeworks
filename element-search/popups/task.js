const modal = document.getElementById('modal_main')
modal.className = modal.className + ' modal_active';

const modalClose = [...document.querySelectorAll('.modal__close')];
const modalSucces = document.getElementById('modal_success');
const showSucces = document.querySelector('.show-success');

modalClose.forEach((element) => {
    const parent = element.closest('.modal_active');
        element.onclick = function() {
            parent.className = 'modal';
        };
    }
)

 showSucces.onclick = function() {
    modalSucces.className = modalSucces.className + ' modal_active';
 };
