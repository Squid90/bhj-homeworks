const tooltip = [...document.querySelectorAll('.has-tooltip')];

tooltip.forEach((element) => {
    element.insertAdjacentHTML("afterEnd",
            '<div class="tooltip" >Текст подсказки</div>'
    );
    const nextTooltip = element.nextSibling;

    element.addEventListener('click', function() {
        const activeTag = document.querySelector('.tooltip_active');
        const { top, left, height } = element.getBoundingClientRect();
        if (activeTag !== null) {
            if (nextTooltip.classList.contains('tooltip_active')) {
                nextTooltip.classList.remove('tooltip_active');
            } else {
                activeTag.classList.remove('tooltip_active');
                nextTooltip.classList.add('tooltip_active');
                nextTooltip.innerText = element.getAttribute('title');
                nextTooltip.setAttribute('style', `left: ${left}px; top: ${top + height}px`);
            }
        } else {
            nextTooltip.classList.add('tooltip_active');
            nextTooltip.innerText = element.getAttribute('title');
            nextTooltip.setAttribute('style', `left: ${left}px; top: ${top + height}px`);
        } 
    });
    element.onclick = function() {
        return false;
    };
});