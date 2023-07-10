
let userInfo = "";

let year = prompt("Введите год рождения:", 2000);

if (year == null) {
    alert("Жаль что Вы не захотели ввести свой год роджения.");
} else {
    userInfo += "Год рождения: " + year + "\n";
}

let city = prompt("Введите название города в котором проживаете:", "Одесса");

if (city == null) {
    alert("Жаль что Вы не захотели ввести название города.");
}

let sport = prompt("Введите название любимого вида спорта:", "Лол, спорт?");


if (sport == null) {
    alert("Жаль что Вы не захотели ввести название любимого вида спорта.");
}


switch (city) {
    case "Киев":
        userInfo += "Ты живёшь в столице Украины, в городе " + city + "\n";
        break;
    case "Лондон":
        userInfo += "Ты живёшь в столице Англии, в городе " + city + "\n";
        break;
    case "Вашингтон":
        userInfo += "Ты живёшь в столице США, в городе " + city + "\n";
        break;
    case null:
        break;
    default:
        userInfo += "Ты живёшь в городе " + city + "\n";
        break;
}

switch (sport) {
    case "Тхэквондо":
        userInfo += "Круто! Хочешь стать как Стивен Лопез.\n";
        break;
    case "Теннис":
        userInfo += "Круто! Хочешь стать как Роджер Федерер.\n";
        break;
    case "Плавание":
        userInfo += "Круто! Хочешь стать как Майкл Фелпс.\n";
        break;
    case null:
        break;
    default:
        userInfo += "Твой любимый спорт: " + sport + "\n";
        break;
}

if (userInfo == "") {
    alert("Пользователь не ввёл данных. :( ");
} else {
    alert(userInfo);
}