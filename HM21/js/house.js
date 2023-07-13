
class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }

    _getFlatNames = (element) => element.name;

    addFlat(flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat);
            console.log(`До будинку було додано квартиру з наступними жильцями: ${flat.people.map(this._getFlatNames)}.`);
        } else {
            console.log(`Цей будинок не може мiстити бiльше ${this.maxFlats} квартир.`);
        }
    }
}


export default House;