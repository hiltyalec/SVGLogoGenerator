//CONSTANTS FOR SHAPE CLASSES
const { Square, Triangle, Circle } = require("./shapes.js");

// TEST FOR SQUARE THAT RENDERS COLOUR RED
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="200" height="100" fill="red" />'
    );
  });
});

// TEST FOR TRIANGLE THAT RENDERS COLOUR BLUE
describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

// TEST FOR CIRCLE THAT RENDERS COLOUR BLACK
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.setColor("#000000");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="#000000" />'
    );
  });
});