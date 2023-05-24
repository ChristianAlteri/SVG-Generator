const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');


// check color and textColor are actually colors
// 