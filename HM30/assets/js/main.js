import categories from "../js/data/categories.js";
import products from "./data/products.js";

const header = document.getElementById("header");
const navigator = document.getElementById("navigator");
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');

const sticky = header.offsetTop;
window.onscroll = pinHeader;

function pinHeader() { // Функция закрепления хэдера 
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

let selectedCategoryNodeId = categories[0].nodeId; // Id выбранной категории 

navigator.addEventListener('click', (event) => { // Слушатель для смены категорий
    if (event.target.nodeName === "IMG") {
        selectedCategoryNodeId = event.target.id;
        refreshCategories();
    }
});

function httpGet(theUrl)
{
    // var xmlHttp = new XMLHttpRequest();
 
    // xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    // xmlHttp.setRequestHeader("Accept", "*/*");
    // xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    // xmlHttp.setRequestHeader("Content-Type", "application/json");
    // xmlHttp.setRequestHeader("Connection", "keep-alive");
    // xmlHttp.send( null );
    // return xmlHttp.responseText;

    let request = new XMLHttpRequest()
    // define the response variable to store the object with the JSON already parsed
    let response = []
    // make a request with json as the response format
    request.open('GET', 'http://94.158.156.118/product/', true) // set true for asynchronous
    request.setRequestHeader('Accept', 'application/json')


    request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // result will be json
        // example: {"ip":"127.0.0.1"}
        // parse the json via JSON.parse
        response = JSON.parse(this.responseText)
        // insert the value of the key "ip"
        console.log(response);
    }
    };
    // send back the response object
    request.send(response)
}

 function refreshCategories() {

    var data =  httpGet("http://94.158.156.118/product/");

    navigator.innerHTML = ''; 
    leftColumn.innerHTML = '';
    hideDetails();

    categories.forEach(category => { // Создаём новый набор категорий (обновляем выбранную пользователем категорию)

        const iconElement = document.createElement('a');
        const icon = document.createElement('img');

        iconElement.href = "#";
        if (selectedCategoryNodeId === category.nodeId) {
            iconElement.className = "active";
        }

        icon.src = category.src;
        icon.className = "icon";
        icon.alt = `${category.src}`;
        icon.id = category.nodeId;

        iconElement.appendChild(icon);
        navigator.appendChild(iconElement);

    });

    products.forEach(product => { /// Создаём новый список продуктов в зависимости от выбранной категории 
        if (selectedCategoryNodeId === product.category.nodeId) {

            const productElement = document.createElement('div');
            productElement.className = "product";
            productElement.addEventListener('click', () => {
                showDetails(product);
            });

            const title = document.createElement("h3");
            const p = document.createElement("p");

            title.innerText = product.name;
            p.innerText = product.description;

            productElement.appendChild(title);
            productElement.appendChild(p);

            leftColumn.appendChild(productElement);
        }
    });

}

function showDetails(product) { // Показываем детальную информацию о продукте 

    rightColumn.innerHTML = ""; // Очищаем компонент
    rightColumn.style.flex = 1; // Меняем вес компонента (в закрытом положении flex = 0)
   

    const title = document.createElement('h3');
    title.innerText = product.name;

    const description = document.createElement('p');
    description.innerText = product.fullDescription;

    const price = document.createElement('p');
    price.innerText = `${product.price}₴`;

    const closeButton = document.createElement('button');
    closeButton.innerText = "Close";
    closeButton.onclick = hideDetails;


    const buyButton = document.createElement('button');
    buyButton.innerText = "Buy";
    buyButton.addEventListener("click", () => buyProduct(product))

    const buttonContainer = document.createElement('div');
    buttonContainer.className = "button-container";

    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(buyButton);

    rightColumn.appendChild(title);
    rightColumn.appendChild(description);
    rightColumn.appendChild(price);
    rightColumn.appendChild(buttonContainer);
    


}

function hideDetails() { // Прячем компонент детальной информациии продукта
    rightColumn.innerHTML = '';
    rightColumn.style.flex = 0;
}

function buyProduct(product) { // Выводим пользователю сообщение о покупке, закрываем компонент продукта 

    // alert(`You bought ${product.name}, its price ${product.price}₴`);

    rightColumn.innerHTML = `<div class="order-form">
    <h2>Інформація про товар</h2>
    <p>Назва: <span id="product-name"></span></p>
    <p>Ціна: <span id="product-price"></span></p>

    <!-- Форма замовлення -->
    <form id="order-form">
        <label for="name">ПІБ покупця:</label>
        <input type="text" id="name" required>

        <label for="city">Місто:</label>
        <select id="city" required>
            <option value="">Оберіть місто</option>
            <option value="city1">Місто 1</option>
            <option value="city2">Місто 2</option>
            <option value="city3">Місто 3</option>
        </select>

        <label for="nova-poshta">Склад Нової пошти:</label>
        <input type="text" id="nova-poshta" required>

        <label for="payment">Спосіб оплати:</label>
        <select id="payment" required>
            <option value="">Оберіть спосіб оплати</option>
            <option value="cash">Післяплата</option>
            <option value="card">Оплата банківською карткою</option>
        </select>

        <label for="quantity">Кількість:</label>
        <br>
        <input type="number" id="quantity" min="1" value="1" required>
        <br>
        <label for="comment">Коментар до замовлення:</label>
        <textarea id="comment"></textarea>

        <input type="submit"></input>
    </form>
</div>`;

    // hideDetails()
}


refreshCategories(); //Запускаем :)
