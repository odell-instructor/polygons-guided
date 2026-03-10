const BaseTriangle = require('../base_models/base-triangle');

class Scalene extends BaseTriangle {

    constructor(sideA, sideB, sideC) {
        super(sideA, sideB, sideC);
    }

    area() {
        return Math.sqrt(this.semiPerimeter() *
        (this.semiPerimeter() - this.sideA) *
        (this.semiPerimeter() - this.sideB) *
        (this.semiPerimeter() - this.sideC));
    }

    semiPerimeter() {
        return this.perimeter() / 2;
    }

    height() {
        let value1 = this.sideA + this.sideB + this.sideC;
        let value2 = -this.sideA + this.sideB + this.sideC;
        let value3 = this.sideA - this.sideB + this.sideC;
        let value4 = this.sideA + this.sideB - this.sideC;
        return .5 * Math.sqrt(value1 * value2 * value3 * value4) / this.sideB;
    }
} 

const test = new Scalene(13, 15, 14);

console.log(test.area());