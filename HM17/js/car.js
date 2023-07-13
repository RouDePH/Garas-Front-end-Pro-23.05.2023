
class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this._owner = null;
    }

    set owner(person) {
        if (person.age >= 18) {
            this._owner = person;
        } else {
            console.log(`Власник повинен бути повнолiтнiм!`);
        }
    }

    get owner() {
        return this._owner;
    }

    print() {
        console.log(`Бренд: ${this.brand}\nМодель: ${this.model}\nРiк випуску: ${this.year}\nНомер: ${this.licensePlate}`);
        if (this._owner) {
            console.log('Інформація про власника:');
            this._owner.print()
        } else {
            console.log("Автомобiль без власника.")
        }
    };
}

export default Car;