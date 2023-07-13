
import Person from "../js/person.js";
import Car from "../js/car.js";

console.log("---------------");

const sergey = new Person("Sergey", 20);
const tesla = new Car("Tesla", "Model X", 2015, "АА1111АА");
tesla.owner = sergey;
tesla.print();

console.log("---------------");

const oleg = new Person("Oleg", 13);
const mustang = new Car("Ford Mustang", "GT VI", 2014, "BH0000АI");
mustang.owner = oleg;
mustang.print();

console.log("---------------");
