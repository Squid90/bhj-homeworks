let activePosition = 0;
const rotator = [...document.querySelectorAll('.rotator__case')];
const i = (element) => element.classList.contains('rotator__case_active');

setInterval (function() {

    activePosition = rotator.findIndex(i);
    if (activePosition >= 0 && activePosition < rotator.length - 1) {
        rotator[activePosition].classList.remove('rotator__case_active');
        rotator[activePosition + 1].classList.add('rotator__case_active');
    } else { 
        rotator[activePosition].classList.remove('rotator__case_active');
        rotator[0].classList.add('rotator__case_active');
    };
    
}, 1000);