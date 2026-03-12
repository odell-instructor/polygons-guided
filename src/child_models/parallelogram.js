const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Parallelogram extends BaseQuadrilateral {

    #angle

    constructor(sideLength, sideWidth, angle) {
        super(sideLength, sideWidth, sideLength, sideWidth);
        this.#angle = angle;
    }

    area() {
        const rad = this.#angle * Math.PI / 180;
        return this.sideA * this.sideB * Math.sin(rad);
    }

    height() {
        return this.area() / this.sideB;
    }

    toString() {
        return 'Parallelogram Quadrilateral';
    }

};

module.exports = Parallelogram;