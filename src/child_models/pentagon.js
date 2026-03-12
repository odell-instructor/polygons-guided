const BasePolygon = require('../base_models/base-polygon');

class Pentagon extends BasePolygon {
    #sideLength;

    constructor(sideLength) {
        super(5);
        this.#sideLength = sideLength;
    }

    get sideLength() { return this.#sideLength; }

    area() {
       const value = this.sides * (this.sides +
        2 * Math.sqrt(this.sides));
        return .25 * Math.sqrt(value) * Math.pow(this.sideLength, 2);
    }

    areaV2() {
        //area = a² × √(25 + 10√5) / 4
        const value = 25 + 10 * Math.sqrt(5);
        return Math.pow(this.#sideLength, 2) * Math.sqrt(value) / 4;
    }

    height() {
        return this.sideLength * Math.sqrt(this.sides +
            2 * Math.sqrt(this.sides)) / 2;
    }

    perimeter() {
        return this.#sideLength * this.sides;
    }

    toString() {
        return 'Pentagon Shape';
    }
};

module.exports = Pentagon;