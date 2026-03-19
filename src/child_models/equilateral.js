const BaseTriangle = require('../base_models/base-triangle');

class Equilateral extends BaseTriangle {

    /**
     * Measurement of each side
     * @param {number} sideLength 
     */
    constructor(sideLength) {
        super(sideLength, sideLength, sideLength);
    }

    height() {
        try {
            let answer = this.sideA * (Math.sqrt(3) / 2);
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch(error) {
            return new Error(error.message);
        }
    }

    heightV2() {
        try {
            let answer = Math.sqrt(Math.pow(this.sideA, 2) - 
            Math.pow(this.sideB / 2, 2));
            if(isNaN(answer)) {
                throw new Error('Sides dont\'t have a valid length');
            } else {
                return answer.toFixed(2);
            }
        } catch(error) {
            return new Error(error.message);
        }
    }

    toString() {
        return 'Equalateral Triangle';
    }
};

module.exports = Equilateral;