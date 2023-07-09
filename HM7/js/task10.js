
//Надрукувати повну таблицю множення від 1 до 10

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        document.write(`${i} * ${j} = ${i * j} <p>`);
    }
    document.write("<br>")
}