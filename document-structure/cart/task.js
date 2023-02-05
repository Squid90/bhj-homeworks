const productDec = [...document.querySelectorAll('.product__quantity-control_dec')];
const productInc = [...document.querySelectorAll('.product__quantity-control_inc')];
const productAdd = [...document.querySelectorAll('.product__add')];
const basket = document.querySelector('.cart__products');


productDec.forEach((element) => {
    element.addEventListener('click', function() {
        const parent = element.closest('.product__quantity-controls');
        const productValue = parent.querySelector('.product__quantity-value');
        if(Number(productValue.textContent) === 1){
            alert('Меньше нельзя');
        } else {
            productValue.textContent = Number(productValue.textContent) - 1;
        };        
    });
});

productInc.forEach((element) => {
    element.addEventListener('click', function() {
        const parent = element.closest('.product__quantity-controls');
        const productValue = parent.querySelector('.product__quantity-value');
        productValue.textContent = Number(productValue.textContent) + 1;
    });
});

productAdd.forEach((element) => {
    element.addEventListener('click', function() {
        const product = element.closest('.product');
        const productQuantity = product.querySelector('.product__quantity-value').textContent;
        const productImg = product.querySelector('img').getAttribute('src');
        const activeProduct = [...basket.querySelectorAll('.cart__product')];
        const i = (element) => element.dataset.id === product.dataset.id;
        activePosition = activeProduct.findIndex(i);
        console.log(activePosition);
        if(activePosition === -1) {
            basket.innerHTML += `
                <div class="cart__product" data-id="${product.dataset.id}">
                    <img class="cart__product-image" src="${productImg}">
                    <div class="cart__product-count">${productQuantity}</div>
                </div>
            `
        } else {
            activeProduct.forEach((element) => {
                if(element.dataset.id === product.dataset.id) {
                    const productCount = element.querySelector('.cart__product-count');
                    productCount.textContent = Number(productCount.textContent) + Number(productQuantity);
                }
            });
        };
    });
});
