
const hours = prompt("Введіть кількість годин:", 0);

const seconds = parseInt(hours * 3600);

if (isNaN(seconds)) {

    alert("Сталася помилка, спробуйте ще раз.");

} else {

    alert(`В ${hours} годинах ${seconds} секунд.`);
}

