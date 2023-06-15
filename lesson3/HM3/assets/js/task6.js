

// Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

var number = parseInt(prompt("Введите трёхзначное число:", 0));

if (!isNaN(number)) {

    let firstDigit = Math.floor(number / 100);
    let secondDigit = Math.floor((number / 10) % 10);
    let thirdDigit = number % 10;

    let sum = firstDigit + secondDigit + thirdDigit;
    let dobytok = firstDigit * secondDigit * thirdDigit;

    if (sum % 2 == 0) {
        alert("Сумма цифр - чётное число.");
    } else {
        alert("Сумма цифр - Нечетное  число");
    }

    if (sum % 5 == 0) {
        alert("Сумма чисел кратна пяти.");
    } else {
        alert("Сумма чисел не кратна пяти.");
    }

    if (dobytok > 100) {
        alert("Произведение чисел более ста");
    } else {
        alert("Произведение чисел менее ста");
    }

} else {
    alert("Введите число!");
}
