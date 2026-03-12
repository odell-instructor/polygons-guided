const BasePolygon = require('../base_models/base-polygon');

class Hexagon extends BasePolygon {
    #sideLength;
    constructor(sideLength) {
        super(6);
        this.#sideLength = sideLength;
    }

    area() {
        return 3 * (Math.sqrt(3) / 2 * Math.pow(this.#sideLength, 2));
    }

    height() {
        return this.#sideLength * Math.sqrt(3);
    }

    perimeter() {
        return this.#sideLength * this.sides;
    }

    toString() {
        return 'Hexagon Shape';
    }

};


/* const test = new Hexagon(34);
console.log(`${test.height()}`); */

module.exports = Hexagon;