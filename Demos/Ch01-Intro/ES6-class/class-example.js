class Square {
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width * 2;
    }
}

const newSquare = new Square(3);
