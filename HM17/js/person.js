
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Ім'я: ${this.name}\nВік: ${this.age}`);
    }

}

export default Person;