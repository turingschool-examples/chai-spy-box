class Rectangle {
  constructor(length = 100, width = 100) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

module.exports = Rectangle;
