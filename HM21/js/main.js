
import House from "../js/house.js";
import Flat from "../js/flat.js";
import Person from "../js/person.js";

const house = new House(2);

const flat1 = new Flat();
flat1.addPerson(new Person('Сергiй', 'male'));
flat1.addPerson(new Person('Олена', 'female'));

house.addFlat(flat1);


const flat2 = new Flat();
flat2.addPerson(new Person('Олег', 'male'));

house.addFlat(flat2);


const flat3 = new Flat();
flat3.addPerson(new Person('Катерина', 'female'));
flat3.addPerson(new Person('Артем', 'male'));

house.addFlat(flat3);
