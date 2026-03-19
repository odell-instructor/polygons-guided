const BasePolygon = require('../base_models/base-polygon');

class Pentagon extends BasePolygon {
    #sideLength;

    constructor(sideLength) {
        super(5);
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

    /**
     * @return {number} sideLength of each side
     */
    get sideLength() { return this.#sideLength; }

    area() {
        
        try {
            const value = this.sides * (this.sides +
            2 * Math.sqrt(this.sides));
            let answer = .25 * Math.sqrt(value) * Math.pow(this.sideLength, 2);
            if(isNaN(answer)) {
                throw new Error('Side doesn\'t have a valid length');
            } else {
                return answer;
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    areaV2() {        
        try {
            //area = a² × √(25 + 10√5) / 4
            const value = 25 + 10 * Math.sqrt(5);
            let answer =  Math.pow(this.#sideLength, 2) * Math.sqrt(value) / 4;
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
            let answer = this.sideLength * Math.sqrt(this.sides +
            2 * Math.sqrt(this.sides)) / 2;
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
        return 'Pentagon Shape';
    }
};

module.exports = Pentagon;