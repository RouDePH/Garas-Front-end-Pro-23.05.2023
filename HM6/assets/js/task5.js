
//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

var number = parseInt(prompt("Введите двухзначное число:", 0));

if (!isNaN(number)) {

    let firstDigit = Math.floor(number / 10);
    let secondDigit = number % 10;

    if (firstDigit > secondDigit) {
        alert("Первая цифра двухзначного числа больше.");
    }
    if (firstDigit < secondDigit) {
        alert("Вторая цифра двухзначного числа больше.");
    }
    if (firstDigit === secondDigit) {
        alert("Цифры равны!");
    }

} else {
    alert("Введите число!");
}