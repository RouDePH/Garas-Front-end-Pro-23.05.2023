
// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak.
// У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak.
// Обидва числа та знак виходять від користувача.

let operations = ["+", "-", "*", "/", "%", "^"];

function getDigit(title) {
    let value = 0;
    do {
        value = parseInt(prompt(title));
    } while (value <= 0 || isNaN(value));

    return value;
}

function getOperation() {
    let value = 0;
    do {
        value = prompt('Введите знак математической операции:');
    } while (!operations.includes(value));

    return value;
}


function doMath(x, znak, y) {
    switch (znak) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        case "%":
            return x % y;
        case "^":
            return Math.pow(x, y);
        default: return null;
    }
}

function processThirdTask() {

    const firstDigit = getDigit("Введите первое число: ");
    const operation = getOperation();
    const secondDigit = getDigit("Введите второе число: ");

    const result = doMath(firstDigit, operation, secondDigit);

    alert(`${firstDigit} ${operation} ${secondDigit} = ${result}`);

}