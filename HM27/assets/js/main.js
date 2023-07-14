import categories from "../js/data/categories.js";
import products from "./data/products.js";

const header = document.getElementById("header");
const navigator = document.getElementById("navigator");
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');

const sticky = header.offsetTop;
window.onscroll = myFunction;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

let active = categories[0].nodeId;

navigator.addEventListener('click', (event) => {
    if (event.target.nodeName === "IMG") {

        console.log(event.target.id);

        active = event.target.id;
        refreshCategories();
    }
});

function refreshCategories() {

    navigator.innerHTML = '';
    leftColumn.innerHTML = '';
    hideDetails();

    categories.forEach(category => {

        const a = document.createElement('a');
        const img = document.createElement('img');

        a.href = "#";
        if (active === category.nodeId) {
            a.className = "active";
        }

        img.src = category.src;
        img.className = "icon";
        img.alt = `${category.src}`;
        img.id = category.nodeId;

        a.appendChild(img);
        navigator.appendChild(a);

    });

    products.forEach(product => {
        if (active === product.category.nodeId) {

            const div = document.createElement('div');
            div.className = "product";
            div.addEventListener('click', () => {
                showDetails(div);
            });

            const h3 = document.createElement("h3");
            const p = document.createElement("p");

            h3.innerText = product.name;
            p.innerText = product.description;

            div.appendChild(h3);
            div.appendChild(p);

            leftColumn.appendChild(div);
        }
    });

} refreshCategories();


function showDetails(product) {

    rightColumn.style.flex = 1;
    rightColumn.innerHTML = "";

    const h3 = document.createElement('h3');
    h3.innerHTML = product.querySelector('h3').innerHTML;

    const p = document.createElement('p');
    p.innerHTML = product.querySelector('p').innerHTML;

    const button = document.createElement('button');
    button.innerText = "close";
    button.onclick = hideDetails;

    rightColumn.appendChild(h3);
    rightColumn.appendChild(p);
    rightColumn.appendChild(button);
}

function hideDetails() {
    rightColumn.innerHTML = '';
    rightColumn.style.flex = 0;
}



