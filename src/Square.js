const Rectangle = require("./Rectangle");

class Square extends Rectangle {
  constructor(length, width, id = Date.now()) {
    super(length, width);
    this.id = id;
    this.fox = null;
  }

  getStats() {
    return {
      area: this.getArea(),
      perimeter: 2 * (this.length + this.width),
      diagonalLength:  Math.sqrt(this.getArea()*2)
    };
  };

}

module.exports = Square;
