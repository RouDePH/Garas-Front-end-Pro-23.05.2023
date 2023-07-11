
// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

var number = parseInt(prompt("Введите трёхначное число:", 0));

if (!isNaN(number)) {

  let firstDigit = Math.floor(number / 100);
  let secondDigit = Math.floor((number / 10) % 10);
  let thirdDigit = number % 10;

  if (firstDigit === secondDigit && firstDigit === thirdDigit && secondDigit === thirdDigit) {
    alert("Все цифры числа " + number + " равны");
  } else {
    alert("Цифры введённого числа не равны");
  }
  if (firstDigit === secondDigit || firstDigit === thirdDigit || thirdDigit === secondDigit) {
    alert("В числе есть одинаковые числа");
  } else {
    alert("В числе нет одинаковых чисел");
  }

} else {
  alert("Введите число!");
}