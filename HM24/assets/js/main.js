

const inputElement = document.getElementById('text-input');
const root = document.getElementById('root');

inputElement.addEventListener('focus', () => {
    root.style.display = 'block';
});

inputElement.addEventListener('blur', () => {
    root.style.display = 'none';
});