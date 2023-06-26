// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
// Ступінь передається як другий аргумент у функцію
// pow(num, degree)

const NUMBER = 2;
const DEGREE = 3;

function pow(num, degree) {

    if (degree === 0) {
        return 1;
    } else if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

const result = pow(NUMBER, DEGREE);

document.write(`Результат виконання функцiї: ${result}`);