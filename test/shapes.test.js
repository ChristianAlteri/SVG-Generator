const shapes = require('./shapes.js')

describe('Shapes', () => {
  test('Shapes constructor should set the correct properties', () => {
    const shape = new shapes.Shapes('Company', 'red', 'white');
    expect(shape.company).toBe('Company');
    expect(shape.color).toBe('red');
    expect(shape.textColor).toBe('white');
  });

  test('toHTML method should return the correct SVG markup', () => {
    const shape = new shapes.Shapes('Company', 'red', 'white');
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  ${shape.renderShape()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Company</text>
  </svg>`;
    expect(shape.toHTML()).toBe(expectedSVG);
  });
});


// describe('Circle', () => {
//   test('renderShape method should return the correct SVG markup for a circle', () => {
//     const circle = new Circle('Company', 'red', 'white');
//     const expectedShape = '<circle cx="150" cy="100" r="80" fill="red" />';
//     expect(circle.renderShape()).toBe(expectedShape);
//   });
// });

// describe('Square', () => {
//   test('renderShape method should return the correct SVG markup for a square', () => {
//     const square = new Square('Company', 'red', 'white');
//     const expectedShape = '<rect x="60" y="20" width="180" height="160" fill="red" />';
//     expect(square.renderShape()).toBe(expectedShape);
//   });
// });

// describe('Triangle', () => {
//   test('renderShape method should return the correct SVG markup for a triangle', () => {
//     const triangle = new Triangle('Company', 'red', 'white');
//     const expectedShape = '<polygon points="50,100 150,20 250,100" fill="red" />';
//     expect(triangle.renderShape()).toBe(expectedShape);
//   });
// });