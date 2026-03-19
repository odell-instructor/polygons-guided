const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Rectangle extends BaseQuadrilateral {
    /**
     * Measurement of the length and width
     * @param {*} sideLength 
     * @param {*} sideWidth base of the rectangle
     */
    constructor(sideLength, sideWidth) {
        super(sideLength, sideWidth, sideLength, sideWidth);
    }

    toString() {
        return 'Rectangle Quadrilateral';
    }

};

module.exports = Rectangle;