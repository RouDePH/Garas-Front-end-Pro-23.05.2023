
// Реалізуйте функцію generateKey(length, characters),
// що повертає рядок випадкових символів із набору characters довжиною length.

const LENGTH = 16;
const CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
    let result = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

const key = generateKey(LENGTH, CHARACTERS);

document.write(`Результат виконання функцiї: ${key}`);