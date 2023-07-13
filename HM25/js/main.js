
const GOOGLE_URL = "http://www.google.com"

const userUrl = prompt("Укажите ссылку для перехода: ");

const userButton = document.getElementById('user-button');
userButton.addEventListener('click', () => redirectToUrl(userUrl));

const googleButton = document.getElementById('google-button');
googleButton.addEventListener('click', () => redirectToUrl(GOOGLE_URL));


function redirectToUrl(url) {
    if (!url.startsWith('http://') || !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    window.location.href = url;
}