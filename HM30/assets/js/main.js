import categories from "../js/data/categories.js";
import products from "./data/products.js";

const header = document.getElementById("header");
const container = document.getElementById("container");
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

 function refreshCategories() {

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

function buyProduct(product) {

    rightColumn.innerHTML = `<div>
    <h2>Order form</h2>
    <p>The product's name: ${product.name}</p>
    <p>Price: ${product.price}₴</p>

    <form id="order-form">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="city">City:</label>
        <select id="city" name="city" required>
            <option value="">Choose a city</option>
            <option value="Odessa">Odessa</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Lviv">Lviv</option>
        </select>

        <label for="nova-poshta">Post Office:</label>
        <input type="text" id="nova-poshta" name="novaPoshta" required>

        <label for="payment">Payment Method:</label>
        <select id="payment" name="payment" required>
            <option value="">Choose a payment method</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
        </select>

        <label for="quantity">Quantity:</label>
        <br>
        <input type="number" id="quantity" name="quantity" min="1" value="1" required>
        <br>
        <label for="comment">Comments:</label>
        <textarea id="comment" name="comment"></textarea>

        <input type="submit"></input>
    </form>
</div>`;


const registrationForm = document.getElementById("order-form");

registrationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = new FormData(e.target);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    hideDetails();  

    const orderDetails = `
      <p><strong>Full Name:</strong> ${data.name}</p><br>
      <p><strong>City:</strong> ${data.city}</p><br>
      <p><strong>Post Office:</strong> ${data.novaPoshta}</p><br>
      <p><strong>Payment Method:</strong> ${data.payment}</p><br>
      <p><strong>Product:</strong> ${product.name}</p><br>
      <p><strong>Product price:</strong> ${product.price}₴</p><br>
      <p><strong>Quantity:</strong> ${data.quantity}</p><br>
      ${data.comment!= "" ? `<p><strong>Comments:</strong> ${data.comment}</p><br>` : ""}
      <p><strong>Total Price:</strong> ${(data.quantity*product.price).toFixed(2)}₴</p><br>
    `;

    leftColumn.innerHTML = orderDetails;

});


}


refreshCategories();
