/* This class should not be accessed directly. */

class BasePolygon {
    #sides;
    /**
     * @param {number} sides
     */
    constructor(sides) {
        try {
            if(typeof sides === 'number' && !isNaN(sides)) {
                this.#sides = sides;
            } else {
                throw new Error('Sides must be a number');
            } 
        } catch(error) {
            console.error(error.message);
        }
    }

    get sides() {
        return this.#sides;
    }

    area() { }

    height() { }

    perimeter() { }

    interiorAngle() {
        return (this.sides - 2) * 180;
    }
};

module.exports = BasePolygon;