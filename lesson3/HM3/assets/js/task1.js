
//Дано два різні числа. Визначити, яке з них більше, а яке менше

var number1 = parseInt(prompt("Введите первое число:", 0));
var number2 = parseInt(prompt("Введите второе число:", 0));

if (!isNaN(number1) && !isNaN(number2)) {

    if (number1 === number2) {
        alert("Числа равны.");
    }
    if (number1 > number2) {
        alert(`Первое число ${number1} больше второго числа ${number2}.`);
    }
    if (number1 < number2) {
        alert(`Второе число ${number2} больше первого числа ${number1}.`);
    }

} else {
    alert("Что-то пошло не так, попробуйте ещё раз.");
}