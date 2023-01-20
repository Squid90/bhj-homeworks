const nextCard = document.querySelector('.slider__arrow_next');
const prevCard = document.querySelector('.slider__arrow_prev');
let activePosition = 0;
const picture = [...document.querySelectorAll('.slider__item')];
const i = (element) => element.classList.contains('slider__item_active');

function changePictureNext (activePosition) {
    activePosition = picture.findIndex(i);
    picture[activePosition].classList.toggle('slider__item_active');
    activePosition = (activePosition === picture.length - 1) ? 0 : activePosition + 1;
    picture[activePosition].classList.toggle('slider__item_active')

};

function changePicturePrev (activePosition) {
    activePosition = picture.findIndex(i);
    picture[activePosition].classList.toggle('slider__item_active');
    activePosition = (activePosition === 0) ? picture.length - 1 : activePosition - 1;
    picture[activePosition].classList.toggle('slider__item_active')
};

nextCard.onclick = function() {
    changePictureNext(activePosition);
}

prevCard.onclick = function() {
    changePicturePrev(activePosition);
}


