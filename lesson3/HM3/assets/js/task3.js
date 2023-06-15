
//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

var number1 = parseInt(prompt("Введите первое число:", 0));
var number2 = parseInt(prompt("Введите второе число:", 0));

if (!isNaN(number1) && !isNaN(number2)) {

    if (number1 % number2 == 0) {
        alert(`Второе число ${number2} - дилитель числа ${number1}`);
    } else if (+number2 % number1 == 0) {
        alert(`Первое число ${number1} - дилитель числа  ${number2}`);
    } else {
        alert("Числа не являются дилителями друг друга");
    }

} else {
    alert("Что-то пошло не так, попробуйте ещё раз.");
}