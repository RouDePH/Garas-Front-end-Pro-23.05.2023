
//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let number = +prompt("Введите целое число: ",0);

if(!isNaN(number)){

    for(let i = 1; i < 100 && Math.pow(i,2) < number; i++){
        document.write(`${i}<p>`);
    }
}