const BasePolygon = require('../base_models/base-polygon');

class Hexagon extends BasePolygon {
    #sideLength;
    constructor(sideLength) {
        super(6);
        try {
            if(typeof sideLength === 'number') {
                this.#sideLength = sideLength;
            } else {
                throw new Error('Side must be a number');
            }
        } catch(error) {
             console.error(error.message);
        }       
    }

    area() {        
        try {
            let answer =  3 * (Math.sqrt(3) / 2 * Math.pow(this.#sideLength, 2));
            if(isNaN(answer)) {
                throw new Error('Side doesn\'t have a valid length');
            } else {
                return answer;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    height() {        
        try {
            let answer = this.#sideLength * Math.sqrt(3);
            if(isNaN(answer)) {
                throw new Error('Side doesn\'t have a valid length');
            } else {
                return answer;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    perimeter() {        
        try {
            let answer = this.#sideLength * this.sides;
            if(isNaN(answer)) {
                throw new Error('Side doesn\'t have a valid length');
            } else {
                return answer;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    toString() {
        return 'Hexagon Shape';
    }

};

module.exports = Hexagon;