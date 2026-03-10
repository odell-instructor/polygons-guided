const BaseTriangle = require('../base_models/base-triangle');

class Isosceles extends BaseTriangle {

    constructor(sideA, sideB) {
        super(sideA, sideB, sideA);
    }

    height() {
        return Math.sqrt(Math.pow(this.sideA, 2) - 
        (Math.pow(this.sideB, 2) / 4));
    }
};

const test = new Isosceles(24, 18);

console.log(test.area());

module.exports = Isosceles;