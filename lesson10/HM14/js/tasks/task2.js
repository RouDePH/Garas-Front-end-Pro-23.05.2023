
// Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.

function sumDigits(array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(parseInt(array[i]))) {
            sum += array[i];
            count++;
        }
    }

    return sum/count;
}

function processSecondTask() {

    const array = ['qwerty', 1, 5, 7, ["2", "123"], " "];
    var sum = sumDigits(array);
    alert(sum);

}