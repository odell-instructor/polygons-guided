const BasePolygon = require('./base-polygon');

/* This class should not be accessed directly */
class BaseQuadrilateral extends BasePolygon {
    #sideA;
    #sideB; // base of the quadrilateral
    #sideC;
    #sideD;

    /**
     * Measurement of the sides that should be larger than
     * or equal to 1.
     * @param {number} sideA 
     * @param {number} sideB 
     * @param {number} sideC 
     * @param {number} sideD
     * 
     */
    constructor(sideA, sideB, sideC, sideD) {
        super(4);
        try {
            if(typeof sideA === 'number' && !isNaN(sideA)) {
                this.#sideA = sideA;
            } else if(typeof sideB === 'number' && !isNaN(sideB)) {
                this.#sideB = sideB;
            } else if(typeof sideC === 'number' && !isNaN(sideC)) {
                this.#sideC = sideC;
            } else if(typeof sideD === 'number' && !isNaN(sideD)) {
                this.#sideD = sideD;
            } else {
                throw new Error('Side must be a number');
            }
        } catch(error) {
             console.error(error.message);
        }
    }

    /**
     * @return {number} length of Side A
     */
    get sideA() { return this.#sideA; }

    /**
     * @return {number} length of Side B
     */
    get sideB() { return this.#sideB; }

    /**
     * @return {number} length of Side C
     */
    get sideC() { return this.#sideC; }

    /**
     * @return {number} length of Side D
     */
    get sideD() { return this.#sideD; }

    area() {
        return this.#sideA * this.#sideB;
    }

    height() {
        return this.#sideA;
    }

    perimeter() {
        return this.#sideA + this.#sideB + this.#sideC + this.#sideD;
    }

};

module.exports = BaseQuadrilateral;