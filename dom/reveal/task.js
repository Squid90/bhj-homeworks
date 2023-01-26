const reveal = [...document.querySelectorAll('.reveal')];

const heightWin = window.innerHeight

reveal.forEach((element) => {
    window.addEventListener('scroll', function() {
        const { top, bottom, height } = element.getBoundingClientRect()
        if (top < heightWin - height) {
            element.classList.add('reveal_active');
        }
        if (top < 10 || bottom > heightWin + 10) {
            element.classList.remove('reveal_active');
        };
    });
});


