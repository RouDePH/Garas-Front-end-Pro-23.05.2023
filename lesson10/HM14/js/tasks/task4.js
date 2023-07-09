
// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач




function fillArray(){





}


function getUserData(){
    return prompt("Введите данные ячейки:");
}


function getDigit(title) {
    let value = 0;
    do {
        value = parseInt(prompt(title));
    } while (value <= 0 || isNaN(value));

    return value;
}

function processFouthTask() {

    firstLength = getDigit("Введите длинну масива:");
    secondLength = getDigit("Введите длинну внутренних масивов:");

    const array = fillArray(firstLength, )

}