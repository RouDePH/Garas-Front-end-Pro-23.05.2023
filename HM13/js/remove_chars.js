
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

const result = removeChars(" hello world", ['l', 'd']);
console.log(result);