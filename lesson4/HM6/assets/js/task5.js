

let number = +prompt("Введите первое число", 2);


function isEven(number) {
  var x = Boolean();
  if (number % 2 == 0) {
    x = true;
  } else {
    x = false;
  }
  return x;

}

let result = isEven(number);
alert(result)