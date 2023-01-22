const tab = [...document.querySelectorAll('.tab')];
let activeTab = 0;
const content = [...document.querySelectorAll('.tab__content')]
let activeContent = 0;
const i = (element) => element.classList.contains('tab__content_active');

function changeContent(activeTab) {
    activeContent = content.findIndex(i);
    content[activeContent].classList.toggle('tab__content_active')
    content[activeTab].classList.toggle('tab__content_active')
};


tab.forEach((element) => {
    element.addEventListener('click', function() {
        const currentTab = document.querySelector('.tab_active');
        currentTab.classList.toggle('tab_active');
        element.classList.toggle('tab_active');
        activeTab = tab.indexOf(element);
        changeContent(activeTab);
        }
    )
});