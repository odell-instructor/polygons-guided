const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Square extends BaseQuadrilateral {
    /**
     * Measurement to each length of a square
     * @param {number} sideLength 
     */
    constructor(sideLength) {
        super(sideLength, sideLength, sideLength, sideLength);
    }

    toString() {
        return 'Square Quadrilateral';
    }
};

module.exports = Square;