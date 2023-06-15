
//Дано ціле число. З'ясувати, чи воно простим (простим називається число,
// більше ніж 1, які мають інших дільників крім 1 і себе).

let number = +prompt("Введите целое число: ", 0);

if(!isNaN(number)){

    let isNatural = true;

    for(let i = number - 1; i > 1; i--){ // а почему нет? 
        if(number%i==0){
            isNatural = false;
        }
    }

    if(isNatural){
        document.write(`Число ${number} - простоe.`);
    } else {
        document.write(`Число ${number} - ne простоe.`);
    }

}   