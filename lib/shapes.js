//THIS IS A SHAPE CLASS THAT REPRESENTS A SHAPE.
class Shape {
    // THIS IS THE CONSTRUCTOR FOR THE SHAPE CLASS  
      constructor() {
        //THIS SETS THE INITIAL COLOUR OF THE SHAPE TO AN EMPTY STRING
        this.color = "";
      }
      //THIS IS FUNCTION THAT ALLOWS YOU TO SET THE COLOUR OF THE SHAPE.
      setColor(shapeColour) {
        //THIS SETS THE COLOUR OF THE SHAPE TO THE SPECIFIED shapeColour
        this.color = shapeColour;
      }
    }
    
    //THIS IS A SQAURE CLASS THAT EXTENDS THE SHAPE CLASS.
    class Square extends Shape {
      //THIS IS A RENDER FUNCTION THAT RETURNS AN SVG RECTANGLE ELEMENT WITHT HE SPECIFIED POSITION, SIZE AND FILL COLOUR.
      render() {
        //THIS SETS THE POSITION, SIZE AND FILL COLOUR OF THE RECTANGLE
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
      }
    }
    
    //THIS IS A TRIANGLE CLASS THAT EXTENDS THE SHAPE CLASS.
    class Triangle extends Shape {
      render() {
        //THIS IS A RENDER FUNCTION THAT RETURNS AN SVG POLYGON ELEMENT WITHT HE SPECIFIED POINTS AND FILL COLOUR.
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      }
    }
    
    //THIS IS A CIRCLE CLASS THAT EXTENDS THE SHAPE CLASS.
    class Circle extends Shape {
      //THIS IS A RENDER FUNCTION THAT RETURNS AN SVG RECTANGLE ELEMENT WITHT HE SPECIFIED CENTRE, RADIUS AND, FILL COLOUR
      render() {
        //THIS SETS THE POSITION, SIZE AND FILL COLOUR OF THE RECTANGLE
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
      }
    }
    
    // THIS IS AN OBJECT THAT EXPORTS THE TRIANGLE, SQUARE AND CIRCLE CLASSES
    module.exports = { Square, Triangle, Circle };