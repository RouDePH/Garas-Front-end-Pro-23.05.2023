
let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let count, sum, index;

// Найти сумму и количество положительных элементов.

count = 0;
sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        count++;
        sum += array[i];
    }
}

document.write(`<p>Сумма положительных элемантов: ${sum}, кол-во: ${count}<p>`);



// Найти минимальный элемент массива и его порядковый номер.

index = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < array[index]) {
        index = i;
    }
}

document.write(`<p>Минимальный элемент массива: ${array[index]}, его индекс: ${index}<p>`);



// Найти максимальный элемент массива и его порядковый номер.

index = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > array[index]) {
        index = i;
    }
}

document.write(`<p>Максимальный элемент массива: ${array[index]}, его индекс: ${index}<p>`);



// Определить количество отрицательных элементов.

count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        count++;
    }
}

document.write(`<p>Количество отрицательных элементов: ${count}<p>`);


// Найти количество нечетных положительных элементов.


count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 != 0) {
        count++;
    }
}

document.write(`<p>Количество нечетных положительных элементов: ${count}<p>`);


// Найти количество четных положительных элементов.

count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        count++;
    }
}

document.write(`<p>Количество четных положительных элементов: ${count}<p>`);


// Найти сумму четных положительных элементов.

sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        sum += array[i];
    }
}

document.write(`<p>Сумма четных положительных элементов: ${sum}<p>`);


// Найти сумму нечетных положительных элементов.

sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 != 0) {
        sum += array[i];
    }
}

document.write(`<p>Сумма нечетных положительных элементов: ${sum}<p>`);


// Найти произведение положительных элементов.

sum = 1;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i]) {
        sum *= array[i];
    }
}

document.write(`<p>Произведение положительных элементов: ${sum}<p>`);


// Найти наибольший среди элементов массива, остальные обнулить.

index = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > array[index]) {
        array[index] = 0;
        index = i;
    } else {
        array[i] = 0;
    }
}

document.write(`<p>Наибольший среди элементов массива: ${array[index]}, его индекс: ${index}<p>`);

document.write(`<p>Новый массив: ${array}<p>`);
