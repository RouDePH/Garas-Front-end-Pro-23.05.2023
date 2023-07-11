
function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return NaN;
    }
}


function removeChars(str, charsToRemove) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!charsToRemove.includes(char)) {
            result += char;
        }
    }

    return result;
}

function fillArray() {
    const mainLength = parseInt(prompt('Введіть довжину основного масиву:'));
    const innerLength = parseInt(prompt('Введіть довжину внутрішніх масивів:'));
  
    const array = [];
  
    for (let i = 0; i < mainLength; i++) {
      const innerArray = [];
  
      for (let j = 0; j < innerLength; j++) {
        const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
        innerArray.push(value);
      }
  
      array.push(innerArray);
    }
  
    return array;
  }
