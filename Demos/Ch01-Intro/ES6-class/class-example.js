class Square {
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width ** 2;
    }
}

cont newSquare = new Square(3);

console.log(newSquare.area());