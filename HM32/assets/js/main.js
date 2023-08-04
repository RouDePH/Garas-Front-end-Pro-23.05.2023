import categories from "../js/data/categories.js";
import products from "./data/products.js";
import LocalStorage from './local_storage/local_storage.js';

const header = document.getElementById("header");
const container = document.getElementById("container");
const navigator = document.getElementById("navigator");
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');
const headerIconNode = document.getElementById('header-checklist');

const sticky = header.offsetTop;
window.onscroll = pinHeader;

const headerIcon = document.createElement('img');
headerIcon.src = "assets/images/list.png";
headerIcon.className = "header-checklist";
headerIcon.alt = "assets/images/list.png";

headerIcon.onclick = showOrders;
header.appendChild(headerIcon);
const ordersStorage = new LocalStorage("orders");

let selectedCategoryNodeId = categories[0].nodeId;
navigator.addEventListener('click', (event) => {
    if (event.target.nodeName === "IMG") {
        selectedCategoryNodeId = event.target.id;
        refreshCategories();
    }
});


function showOrders() {

    const data = ordersStorage.readObjectsFromStorage();

    if (Object.keys(data).length > 0) {

        hideDetails();
        leftColumn.innerHTML = null;

        for (const key in data) {
            console.log(data[key]);

            const dataNode = document.createElement("div");
            dataNode.className = "order-data";
            const orderDetails = data[key].orderDetails;
            const product = data[key].product;
            const date = new Date(data[key].date);

            var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            dataNode.innerHTML = `
            <p><strong>Date:</strong> ${date.toLocaleDateString("en-US", dateOptions)}. ${date.getHours()}:${date.getMinutes()}</p>
            <p><strong>Total Price:</strong> ${(orderDetails.quantity * product.price).toFixed(2)}₴</p><br></br>`;

            leftColumn.appendChild(dataNode);
            dataNode.addEventListener("click", () => showOrderDetails(orderDetails, product, key));
        }
    } else {
        alert(`You didn't order`);
    }
}


function refreshCategories() {

    navigator.innerHTML = '';
    leftColumn.innerHTML = '';
    hideDetails();

    categories.forEach(category => {

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

    products.forEach(product => {
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

function showDetails(product) {

    rightColumn.innerHTML = "";
    rightColumn.style.flex = 1;

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
        const key = generateUID();

        ordersStorage.addObject(key, { orderDetails: data, product: product, date: Date() });
        showOrderDetails(data, product, key);

    });
}

function showOrderDetails(orderData, product, key) {
    hideDetails();

    const deleteIcon = document.createElement('img');
    deleteIcon.src = "assets/images/delete.png";
    deleteIcon.className = "header-checklist";
    deleteIcon.alt = "assets/images/delete.png";

    deleteIcon.onclick = () => {

        ordersStorage.deleteObject(key);
        alert("Order deleted");

        refreshCategories();

    };

    const orderDetails = `
  <p><strong>Full Name:</strong> ${orderData.name}</p><br>
  <p><strong>City:</strong> ${orderData.city}</p><br>
  <p><strong>Post Office:</strong> ${orderData.novaPoshta}</p><br>
  <p><strong>Payment Method:</strong> ${orderData.payment}</p><br>
  <p><strong>Product:</strong> ${product.name}</p><br>
  <p><strong>Product price:</strong> ${product.price}₴</p><br>
  <p><strong>Quantity:</strong> ${orderData.quantity}</p><br>
  ${orderData.comment != "" ? `<p><strong>Comments:</strong> ${orderData.comment}</p><br>` : ""}
  <p><strong>Total Price:</strong> ${(orderData.quantity * product.price).toFixed(2)}₴</p><br>
`;

    leftColumn.innerHTML = orderDetails;

    leftColumn.appendChild(deleteIcon);
}


function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

function pinHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function hideDetails() {
    rightColumn.innerHTML = '';
    rightColumn.style.flex = 0;
}

refreshCategories();
