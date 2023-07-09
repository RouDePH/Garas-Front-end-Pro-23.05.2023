
//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

var number = parseInt(prompt("Введите шестизначное число:", 0));

if (!isNaN(number)) {

    let firstDigit = Math.floor(number / 100000);
    let secondDigit = Math.floor((number / 10000) % 10);
    let thirdDigit = Math.floor((number / 1000) % 10);
    let fourthDigit = Math.floor((number / 100) % 10);
    let fifthDigit = Math.floor((number / 10) % 10);
    let sixthDigit = number % 10;

    if (firstDigit + secondDigit + thirdDigit === fourthDigit + fifthDigit + sixthDigit) {
        alert("Число зеркальное ");
    } else {
        alert("Число не зеркальное");
    }

} else {
    alert("Введите число!");
}