// Import shapes
const shapes = require('../shapes.js')

// Make sure Shapes actually assigns data correctly
describe('Shapes', () => {
  test('Shapes constructor should set the correct properties', () => {
    const shape = new shapes.Shapes('ABC', 'red', 'white');
    expect(shape.company).toBe('ABC');
    expect(shape.color).toBe('red');
    expect(shape.textColor).toBe('white');
  });
});

// Check  that shapes render correct html
describe('render Circle', () => {
  test('renderShape method should return the correct SVG markup for a circle', () => {
    const circle = new shapes.Circle('ABC', 'red', 'white');
    const expectedShape = '<circle cx="150" cy="100" r="80" fill="red" />';
    expect(circle.renderShape()).toBe(expectedShape);
  });
});

describe('render Square', () => {
  test('renderShape method should return the correct SVG markup for a square', () => {
    const square = new shapes.Square('ABC', 'red', 'white');
    const expectedShape = '<rect x="60" y="20" width="180" height="160" fill="red" />';
    expect(square.renderShape()).toBe(expectedShape);
  });
});

describe('render Triangle', () => {
  test('renderShape method should return the correct SVG markup for a triangle', () => {
    const triangle = new shapes.Triangle('ABC', 'red', 'white');
    const expectedShape = '<polygon points="50,100 150,20 250,100" fill="red" />';
    expect(triangle.renderShape()).toBe(expectedShape);
  });
});



