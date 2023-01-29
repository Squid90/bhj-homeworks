const interest = [...document.querySelectorAll('.interest')];


interest.forEach((element) => {
    const checkBox = element.querySelector('.interest__check');
    checkBox.addEventListener('change', () => {
        const interestsActive = element.querySelector('.interests_active');
        if (interestsActive !== null) {
            const checkBoxChild = [...interestsActive.querySelectorAll('.interest__check')];
            checkBoxChild.forEach((item) => {
                item.checked = checkBox.checked;
            });
        };
    });
})