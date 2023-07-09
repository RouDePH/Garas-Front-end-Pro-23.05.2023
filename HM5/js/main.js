
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case null:
        console.log('ви відмінили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}