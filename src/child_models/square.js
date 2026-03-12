const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Square extends BaseQuadrilateral {
    constructor(sideLength) {
        super(sideLength, sideLength, sideLength, sideLength);
    }

    toString() {
        return 'Square Quadrilateral';
    }
};

module.exports = Square;