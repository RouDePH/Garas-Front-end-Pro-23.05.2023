
//Вивести таблицю множення на 7

let result = "";

for (var i = 1; i < 10; i++) {

    let num = i * 7;

    result += `${i} * 7 = ${num} </p>`;

}

document.write(result);