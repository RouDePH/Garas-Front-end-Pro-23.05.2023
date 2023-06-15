

//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

//2 задание тоже самое и убирай пустые строки

var km = parseInt(prompt("Введите расстояние в километрах:", 0));
var ft = parseInt(prompt("Введите расстояние в футах:", 0));

if (!isNaN(km) && !isNaN(ft)) {

    let metersFromKm = km * 1000;
    let metersFromFt = ft * 305;

    if (metersFromKm > metersFromFt) {
        alert("Расстояние в километрах больше.");
    }
    if (metersFromKm < metersFromFt) {
        alert("Расстояние в футах больше.");
    }
    if (metersFromKm === metersFromFt) {
        alert("Расстояния равны.");
    }

} else {
    alert("Что-то пошло не так, попробуйте ещё раз.");
}



