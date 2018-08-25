module.exports = class ShapeAreas {
  
    circle(radius) {
      return 2*Math.PI*radius;
    }

    square(side) {
        return side * 2;
    }

    triangle(base, height) {
        return .5 * base * height;
    }
  };
