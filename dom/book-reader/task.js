const fontSize = [...document.querySelectorAll('.font-size')];
const bookID = document.getElementById('book');

fontSize.forEach((element) => {
    element.addEventListener('click', function() {
        const activeFont = document.querySelector('.font-size_active');
        activeFont.classList.remove('font-size_active');
        element.classList.add('font-size_active');
        if (element.dataset.size === 'big') {
            bookID.classList.remove('book_fs-small');
            bookID.classList.add('book_fs-big');
        } else if (element.dataset.size === 'small') {
            bookID.classList.add('book_fs-small');
            bookID.classList.remove('book_fs-big');
        } else {
            bookID.classList.remove('book_fs-small');
            bookID.classList.remove('book_fs-big');
        }
    });
    element.onclick = function() {
        return false;
    }
});