
// Є масив об'єктів з товарами та їх цінами.
// Вивести в консоль список із даними по всіх товарах (кожен товар на окремому рядку в консолі).
// Від користувача отримати номер товару (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію),
// вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн, розрахувати знижку в 20% і повідомити про це користувача.

// * ускладнити практичне завдання запровадженням категорій товарів.
// Відповідно, користувач може вибрати категорію товару, номер товару та кількість. Потім результат його вибору з'явиться на сторінці

const EXCHANGE = 36.70; // Курс за 25.06 от НБУ

const DISCOUNT_START_FROM = 10000;
const DISCOUNT_STR = 20;
const DISCOUNT = DISCOUNT_STR / 100;

function selectProductsByCategory(category) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            result.push(products[i]);
        }
    }
    return result;
}

function getAmount() {
    let value = 0;

    do {
        value = parseInt(prompt('Введите количество продуктов:'));
    } while (value <= 0 || isNaN(value));

    return value;
}

function getProductsStringFromShopCart(shopCart) {
    let result = "";

    for (let i = 0; i < shopCart.length; i++) {
        let product = shopCart[i]['product'];
        let quantity = shopCart[i]['quantity'];
        result += `${i + 1}. ${product.name}, категория "${product.category}", кол-во ${quantity}, общая цена: ${product.price.toFixed(2) * quantity}$\n`;
    }
    return result;
}

function getProductsString(products) {
    let result = "";
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        result += `${i + 1}. ${product.name}, категория "${product.category}", цена: ${product.price.toFixed(2)}$\n`;
    }
    return result;
}


function calculateProductPrice(price, quantity) {
    return price * quantity;
}

function calculateDiscount(price) {
    if (price * EXCHANGE > DISCOUNT_START_FROM) {
        return price - price * DISCOUNT;
    }
    return null;
}


function getProducts() {
    let category = prompt("Введите категорию товара:");
    let selectedProducts = selectProductsByCategory(category);

    if (products.length > 0) {
        let productsString = getProductsString(selectedProducts);

        let productIndex = 0;
        let quantity = 0;

        do {
            productIndex = parseInt(prompt(`Среди этой категории товаров есть:\n${productsString}\nВыберите номер интерисующего вас продукта:`, 1));
        } while (productIndex < 1 || productIndex > selectedProducts.length || isNaN(productIndex));

        quantity = getAmount();

        alert(`Вы добавили в корзину ${quantity} товара(ов) с наименованием "${selectedProducts[productIndex - 1].name}"`);

        return { "product": selectedProducts[productIndex - 1], "quantity": quantity };

    } else {
        alert("К сожалению у нас нет товаров данной категории");
    }
}


(function () {

    let shopCart = [];

    while (true) {

        let task = parseInt(prompt("Выберите операцию:\n1. Просмотреть каталог товаров.\n2. Добавить товар в корзину\n3. Отобразить содержимое корзины\n4. Перейти к оплате", 1));

        switch (task) {

            case isNaN:
                return;

            case 1:
                let productsString = getProductsString(products);
                alert(productsString);
                break;

            case 2: {
                let products = getProducts();
                shopCart.push(products);
                break;
            }

            case 3:
                if (shopCart.length > 0) {
                    let result = getProductsStringFromShopCart(shopCart)
                    alert(result);
                } else {
                    alert("Ваша корзину пуста");
                }
                break;

            case 4:
                if (shopCart.length > 0) {
                    let totalPrice = 0;

                    for (let i = 0; i < shopCart.length; i++) {
                        let product = shopCart[i]['product'];
                        let quantity = shopCart[i]['quantity'];

                        totalPrice += calculateProductPrice(product.price, quantity);
                    }

                    let discount = calculateDiscount(totalPrice);
                    if (discount) {

                        alert(`Вы получили скидку ${DISCOUNT_STR}%\nСумма товаров с корзины составляет ${discount}$ ( ${(totalPrice * EXCHANGE).toFixed(2)} грн )\nСодержимое корзины:\n${getProductsStringFromShopCart(shopCart)}`);

                    } else {
                        alert(`Общая сумма корзины составляет: ${totalPrice}$ ( ${(totalPrice * EXCHANGE).toFixed(2)} грн )\nСодержимое корзины:\n${getProductsStringFromShopCart(shopCart)}`);
                    }

                } else {
                    alert("Ваша корзину пуста");
                }
                break;

            default:
                alert("Номера с такой операцией не существует!");
                break;
        }

    }

})();
