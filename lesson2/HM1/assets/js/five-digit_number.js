

let number = prompt("Enter a five-digit number:", 12345);

if(isNaN(number) || number.length != 5){
    alert("Something went wrong. Please try again");
} else {

let digits = [];


while (number > 0) {
  let digit = number % 10;

  digits.unshift(digit);

  number = Math.floor(number / 10);
}

alert(digits.join(' '));

}
