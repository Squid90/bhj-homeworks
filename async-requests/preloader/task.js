const items = document.getElementById('items');
const loader = document.querySelector('.loader');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const arr = Object.values([JSON.parse(xhr.responseText).response.Valute][0]);
        arr.forEach((el) => {
            items.innerHTML += `
                <div class="item">
                    <div class="item__code">
                    ${el.CharCode}
                    </div>
                    <div class="item__value">
                    ${el.Value}
                    </div>
                    <div class="item__currency">
                    руб.
                    </div>
                </div>
            `;
        });
        loader.classList.remove('loader_active');
    };
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

