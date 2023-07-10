
function getRandomIntNumber(from, to) {
    const scaledNumber = Math.random() * (to - from + 1) + from;
    return Math.floor(scaledNumber);
}

function getRoot() {
    return document.getElementById('root');
}

(function () {

    const number = getRandomIntNumber(1, 10);
    const image = `image-${number}.jpg`;

    const style = `
    body {
        background-image: url('assets/images/${image}');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
      }
    `;

    const root = getRoot();
    root.textContent = image;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = style;
    document.head.appendChild(styleSheet);

})();