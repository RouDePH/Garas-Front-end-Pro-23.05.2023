
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

console.log(doMath(1,"+",3));
console.log(doMath(1,"-",3));
console.log(doMath(2,"*",3));
console.log(doMath(4,"/",2));
console.log(doMath(6,"%",3));
console.log(doMath(6,"^",2));
console.log(doMath(6,"#",3));