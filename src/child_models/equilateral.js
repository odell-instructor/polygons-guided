const BaseTriangle = require('../base_models/base-triangle');

class Equilateral extends BaseTriangle {

    constructor(sideLength) {
        super(sideLength, sideLength, sideLength);
    }

    height() {
        return this.sideA * (Math.sqrt(3) / 2);
    }

    heightV2() {
        return Math.sqrt(Math.pow(this.sideA, 2) - 
        Math.pow(this.sideB / 2, 2));
    }
};

module.exports = Equilateral;