
//Вивести квадрати чисел від 10 до 20

let result = "";

for (var i = 10; i < 20; i++) {

    result += `${Math.pow(i, 2)}, `;

}

result += `${Math.pow(i, 2)}.`;

document.write(result);