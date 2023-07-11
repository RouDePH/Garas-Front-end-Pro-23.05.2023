
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//Визначити кількість його парних дільників
//Знайти суму його парних дільників

const number = parseInt(prompt("Введите натуральное число", 0));
let score = 0;
let sum = 0;

if (!isNaN(number)) {
    for (let i = 0; i < number; i++) {
        if (number % i == 0) {
            if (i % 2 == 0) {
                document.write(`Число ${i} - парный дилитель числа ${number}</p>`);
                score++;
                sum += i;
                continue;
            }
            document.write(`Число ${i} - дилитель числа ${number}</p>`);
        }

    }
    alert(`У числа ${number} имеется ${score} парных дилителей, их сумма равна ${sum}`);
}

