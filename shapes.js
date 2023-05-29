// Create a Shapes class and assign correct values
class Shapes {
  constructor(company, color, textColor) {
    this.company = company;
    this.color = color;
    this.textColor = textColor;
  }
  // Use method to create html of svg and call renderShape() inside html
  toHTML() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  ${this.renderShape()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.company}</text>
  </svg>`;
  }
}

//Inherit the assigned data from Shapes and create a specific method for each shape which renders the appropriate shape html 
class Triangle extends Shapes {
  renderShape() {
    return `<polygon points="50,100 150,20 250,100" fill="${this.color}" />`;
  }
}
class Circle extends Shapes {
  renderShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
class Square extends Shapes {
  renderShape() {
    return `<rect x="60" y="20" width="180" height="160" fill="${this.color}" />`;
  }
}

// export 
module.exports = { Shapes, Triangle, Circle, Square };