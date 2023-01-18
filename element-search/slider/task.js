const nextCard = document.querySelector('.slider__arrow_next');
const prevCard = document.querySelector('.slider__arrow_prev');
let activePosition = 0;
const picture = [...document.querySelectorAll('.slider__item')];

function changePictureNext (activePosition) {
    for(let i = 0; i < picture.length; i += 1) {
        if (picture[i].classList.contains('slider__item_active')) {
            activePosition = i;
            break;
        } 
    };

    if(activePosition === 4) {
        picture[activePosition].classList.toggle('slider__item_active');
        picture[0].classList.toggle('slider__item_active');
    } else {
        picture[activePosition].classList.toggle('slider__item_active');
        picture[activePosition + 1].classList.toggle('slider__item_active');
    };
};

function changePicturePrev (activePosition) {
    for(let i = 0; i < picture.length; i += 1) {
        if (picture[i].classList.contains('slider__item_active')) {
            activePosition = i;
            break;
        } 
    };

    if(activePosition === 0) {
        picture[activePosition].classList.toggle('slider__item_active');
        picture[4].classList.toggle('slider__item_active');
    } else {
        picture[activePosition].classList.toggle('slider__item_active');
        picture[activePosition - 1].classList.toggle('slider__item_active');
    };
};

nextCard.onclick = function() {
    changePictureNext(activePosition);
}

prevCard.onclick = function() {
    changePicturePrev(activePosition);
}


