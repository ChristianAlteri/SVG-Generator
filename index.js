// Import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./shapes.js");


function validateCompany(company) {
  // we only provide true if condition is met. Inquirer won't move to next question if false. if false we use the || to pass an err msg. (less of an err more of a blocker)
  return (
    company.length <= 3 || "Company name must be no more than 3 characters."
  );
}

// Run the npm inquirer package
function start() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What is the name of your company (must be no more than 3 characters)?",
        name: "company",
        validate: validateCompany,
      },
      {
        type: "list",
        message: "Select the shape of your logo:",
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message: "Select the color of your logo:",
        name: "color",
      },
      {
        type: "input",
        message: "Select the color of your font:",
        name: "textColor",
      },
      {
        type: "input",
        message: "Press y to make your SVG:",
        name: "confirm",
      },
    ])
    // Store the data in response
    .then((response) => {
      if (response.confirm === "y") {
        // De structure response
        const { company, shape, color, textColor } = response;
        // Store correct SVG data in logo by running toHTML()
        let logo;
        // Conditional checking what shape the user selected
        if (shape === "triangle") {
          const triangle = new Triangle(company, color, textColor);
          logo = triangle.toHTML();
        } else if (shape === "circle") {
          const circle = new Circle(company, color, textColor);
          logo = circle.toHTML();
        } else if (shape === "square") {
          const square = new Square(company, color, textColor);
          logo = square.toHTML();
        }
        // write the logo to the folder ./examples
        fs.writeFileSync("./examples/logo.svg", logo);
        console.log("Generated logo.svg");
      } else {
        console.log("Let's try that again");
        start();
      }
    });
}

start();
