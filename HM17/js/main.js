
// TODO: Тут необхідно використовувати саме синтаксис класів в js
// і кожен з методів повинен знаходитись в описанні того чи іншого класу
// після вже створення екзмепляру класу, обидва об'єкти повинні один з одним маніпулювати
// як вказано в завданні:

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
// Передевітся заняття, якщо не вийде приєднуйтесь раніше - розберемо разом



function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printData = function () {
        alert(`Ім'я: ${this.name}\nВік: ${this.age}`);
    };
}


const Car = function (brand, model) {
    this.brand = brand;
    this.model = model;
    this.owner = null;


    this.setOwner = function (newOwner) {
        this.owner = newOwner;
    }

    this.printData = function () {
        alert(`Бренд: ${this.brand}\nМодель: ${this.model}\nВласник: ${this.owner != null ? this.owner.name : "без власника"}`);
    };
}

function getUserStringData(title) {
    let value = "";

    do {
        value = prompt(title);
    } while (value.trim() === "");

    return value;
}

function getUserIntData(title) {
    let value = 0;

    do {
        value = parseInt(prompt(title));
    } while (value <= 0 || isNaN(value));

    return value;
}

function getPersonData() {

    const name = getUserStringData(
        "Введіть ім'я людини");
    const age = getUserIntData(
        "Введіть вік людини");

    return new Person(name, age);
}


function getCarData() {

    const brand = getUserStringData(
        "Введіть бренд автомобіля");
    const model = getUserStringData(
        "Введіть модель автомобіля");

    return new Car(brand, model);
}


(function () {

    const person = getPersonData();
    const car = getCarData();

    if (person.age >= 18) {
        car.setOwner(person);
    }

    person.printData();
    car.printData();

})();

