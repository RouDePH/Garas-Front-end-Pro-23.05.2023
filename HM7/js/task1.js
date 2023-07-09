
//Вивести на сторінку в один рядок через кому числа від 10 до 20

let result = "";

for (var i = 10; i < 20; i++) {
    result += `${i}, `;
}

result += `${i}.`;

document.write(result);