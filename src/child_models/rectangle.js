const BaseQuadrilateral = require('../base_models/base-quadrilateral');

class Rectangle extends BaseQuadrilateral {
    constructor(sideLength, sideWidth) {
        super(sideLength, sideWidth, sideLength, sideWidth);
    }

    toString() {
        return 'Rectangle Quadrilateral';
    }

};

module.exports = Rectangle;