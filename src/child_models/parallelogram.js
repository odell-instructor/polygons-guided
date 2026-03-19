const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Parallelogram extends BaseQuadrilateral {

    #angle

    /**
     * Measurement of the length, width and angle
     * @param {number} sideLength 
     * @param {number} sideWidth base of the shape
     * @param {number} angle in degrees 
     */
    constructor(sideLength, sideWidth, angle) {
        super(sideLength, sideWidth, sideLength, sideWidth);
        try {
            if(typeof angle === 'number') {
                this.#angle = angle;
            } else {
                throw new Error('angle must be a number')
            }
        } catch (error) {
            console.error(error.message);
        }
        this.verifyAngle(angle);
    }

    area() {
        try {
            const rad = this.#angle * Math.PI / 180;
            let answer = this.sideA * this.sideB * Math.sin(rad);
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else if(rad === 0 || rad === Math.PI) {
                throw new Error('Angle must be higher than 0 and less than 180 degrees')
            } else {
                return answer;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    height() {
        try {
            let answer = this.area() / this.sideB;
            if(isNaN(answer)) {
                throw new Error('Sides don\'t have a valid length');
            } else {
                return answer;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    verifyAngle(angle) {
        try {
            switch(true) {
                case angle <= 0:
                case angle >= 180:
                    throw new Error('Angle must be higher than 0 and less than 180 degrees');
            }
        } catch(error) {
            console.error(error.message);
        }
    }

    toString() {
        return 'Parallelogram Quadrilateral';
    }

};

module.exports = Parallelogram;