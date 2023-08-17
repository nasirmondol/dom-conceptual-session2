let total = 0;
let nameArray = [];

function handleClickButton(info) {
    const price = info.parentNode.parentNode.childNodes[5];
    const name = info.parentNode.parentNode.childNodes[1].innerText;

    const cartContainer = document.getElementById('cart-container');
    const h2 = document.createElement('h2');
    h2.classList.add('product-name');
    console.log(h2);

    h2.innerText = name;
    cartContainer.appendChild(h2);


    const priceAmount = parseInt(price.innerText.split(' ')[1]);

    total = total + priceAmount;

    document.getElementById('cart-total').innerText = total;

    let discount = (5 * total) / 100;
    document.getElementById('discount').innerText = discount;
    const brandTotal = total - discount;
    document.getElementById('grand-total').innerText = brandTotal;
}