
let firstNumber = +prompt("Enter first number:", 4);

let secondNumber = +prompt("Enter second number:", 2);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Something went wrong. Please try again");
} else {

    alert(`
    ${firstNumber} + ${secondNumber} = ${+firstNumber + +secondNumber}
    ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
    ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
    ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
    `);

}
