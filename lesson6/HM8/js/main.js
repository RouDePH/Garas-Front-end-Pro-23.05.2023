// Дано масив об’єктів.
// Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів.
// І знайти суму всіх балансів користувачів

let phoneNumbers = [];
let totalSum = 0;


function parseBalanse(balanseString) {
    return parseFloat(
        balanseString
            .replace("$", "")
            .replace(",", "")
    );
}

for (let i = 0; i < users.length; i++) {

    let user = users[i];
    let sum = parseBalanse(user.balance);

    if (sum > 2000) {

        console.log(user.index);

        phoneNumbers.push(user.phone);
        totalSum += sum;
    }
}

document.write(`<p>Телефоннi номери користувачів в яких баланс більше ніж 2000 доларів:<br>${phoneNumbers}</p>`);

document.write(`<p>Cума всіх балансів користувачів: ${totalSum.toFixed(2)}$</p>`);

