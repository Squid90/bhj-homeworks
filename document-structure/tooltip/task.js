const tooltip = [...document.querySelectorAll('.has-tooltip')];

tooltip.forEach((element) => {
    element.insertAdjacentHTML("afterEnd",
            '<div class="tooltip" >Текст подсказки</div>'
    );
    const nextTooltip = element.nextSibling;
    const { top, left } = element.getBoundingClientRect();

    element.addEventListener('click', function() {
        const activeTag = document.querySelector('.tooltip_active');

        if (activeTag !== null) {
            if (nextTooltip.classList.contains('tooltip_active')) {
                nextTooltip.classList.remove('tooltip_active');
            } else {
                activeTag.classList.remove('tooltip_active');
                nextTooltip.classList.add('tooltip_active');
                nextTooltip.innerText = element.getAttribute('title');
                nextTooltip.setAttribute('style', `left: ${0/*left*/}; top: ${0/*top*/}`);
            }
        } else {
            nextTooltip.classList.add('tooltip_active');
            nextTooltip.innerText = element.getAttribute('title');
            nextTooltip.setAttribute('style', `left: ${0/*left*/}; top: ${0/*top*/}`);
        }
        
        
    });
    element.onclick = function() {
        return false;
    }
})