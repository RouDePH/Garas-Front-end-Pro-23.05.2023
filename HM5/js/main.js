
//TODO: Зверніть увагу, що не всі умови будуть виконуватись, завжди перевіряйте код на його валідність
//як підказка, подумайте що повертає кожен з виразів у кейсі, і точно лі ви передали необхідне значення у свіч для порівняння
//тому подфіксіть і буде бал вищче)

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