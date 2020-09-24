class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  //This method gets used first and overrides the one in the parent class
  move() {
    super.move(); // This allows to reuse some of the code from the parent class
    console.log("circle move");
  }
}

const c = new Circle();
