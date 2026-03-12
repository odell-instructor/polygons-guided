const BasePolygon = require('./base-polygon');

/* This class should not be accessed directly */
class BaseTriangle extends BasePolygon {
    #sideA;
    #sideB; // base of the triangle
    #sideC;

    constructor(sideA, sideB, sideC) {
        super(3);
        /* TODO: Ensure that 1 side is not longer
        than the other two sides combined */
        this.#sideA = sideA;
        this.#sideB = sideB;
        this.#sideC = sideC;
    }

    get sideA() { return this.#sideA; }
    get sideB() { return this.#sideB; }
    get sideC() { return this.#sideC; }

    area() {
        return .5 * this.sideB * this.height();
    }

    perimeter() {
        return this.#sideA + this.#sideB + this.#sideC;
    }


};

module.exports = BaseTriangle;