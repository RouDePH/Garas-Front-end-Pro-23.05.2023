
//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

var number = parseInt(prompt("Введите двухзначное число:", 0));

if (!isNaN(number)) {

    let firstDigit = Math.floor(number / 10);
    let secondDigit = number % 10;

    if (firstDigit > secondDigit) {
        alert("Первое число двухзначного числа больше");
    }
    if (firstDigit < secondDigit) {
        alert("Второе число двухзначного числа больше");
    }
    if (firstDigit === secondDigit) {
        alert("Числа равны!");
    }

} else {
    alert("Введите число!");
}