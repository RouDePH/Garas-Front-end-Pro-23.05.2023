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

    rightColumn.appendChild(title);
    rightColumn.appendChild(description);
    rightColumn.appendChild(price);
    rightColumn.appendChild(closeButton);
    rightColumn.appendChild(buyButton);
}

function hideDetails() { // Прячем компонент детальной информациии продукта
    rightColumn.innerHTML = '';
    rightColumn.style.flex = 0;
}

function buyProduct(product) { // Выводим пользователю сообщение о покупке, закрываем компонент продукта 

    alert(`You bought ${product.name}, its price ${product.price}₴`);

    hideDetails()
}


refreshCategories(); //Запускаем :)
