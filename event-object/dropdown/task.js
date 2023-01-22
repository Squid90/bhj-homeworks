const dropDown = document.querySelector('.dropdown__value');
const parent = dropDown.closest('.dropdown');
const listMenu = parent.querySelector('.dropdown__list');
const menuItem = [...listMenu.querySelectorAll('.dropdown__item')];

function dropMenu() {
listMenu.classList.toggle('dropdown__list_active');
};

dropDown.addEventListener('click', dropMenu);

menuItem.forEach((element) =>{
    element.addEventListener('click', function() {
        dropDown.textContent = element.textContent;
        dropMenu();
    }); 
    element.onclick = function() {
        return false;
    } 
});