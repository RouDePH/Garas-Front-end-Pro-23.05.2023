
//Вивести суму лише парних чисел у діапазоні від 30 до 80

//Замечание: 7 задача нет проверки на парные

let sum = 0;

for (let i = 30; i < 80; i += 2) { // Проверка на парность не нужна потому что счётчик цикла начинается с парного числа и шаг у него 2, на непарное число не может наткнутся)   
    sum += i;                    // 
}

// for(let i = 30; i < 80; i ++){  // 
//     if(i%2==0){
//         sum += i;
//     }
// }

document.write(sum);