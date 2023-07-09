

let firstNum = +prompt("Enter first number:", 4);

let secondNum = +prompt("Enter second number:", 2);

let thirdNum = +prompt("Enter third number:", 6);


if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
    alert("Something went wrong. Please try again");
} else {
    alert(`(${firstNum} + ${secondNum} + ${thirdNum}) / 3 = ${(+firstNum + +secondNum + +thirdNum) / 3}`);
}

