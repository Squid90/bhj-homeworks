const modal = document.getElementById('modal_main')
modal.className = modal.className + ' modal_active';

const modalClose = document.querySelector('.modal__close');
const parent = modalClose.closest('.modal_active');
const modalSucces = document.getElementById('modal_success');
const showSucces = document.querySelector('.show-success');

modalClose.onclick = function() {
    parent.className = 'modal';
 };

 showSucces.onclick = function() {
    modalSucces.className = modalSucces.className + ' modal_active';
 };
