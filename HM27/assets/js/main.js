import categories from "../js/data/categories.js";

window.onscroll = function () { myFunction() };

const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

const navigator = document.getElementById("navigator");

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

}

refreshCategories();



