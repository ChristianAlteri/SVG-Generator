import fs from "fs";
import inquirer from "inquirer";
import { Triangle, Circle, Square } from './shapes.js';

  function validateCompany(company) {
    // we only provide true if condition is met. Inquirer won't move to next question if false. if false we use the || to pass an err msg. (less of an err more of a blocker)
    return company.length <= 3 || "Company name must be no more than 3 characters.";
  }

function start() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of your company (must be no more than 3 characters)?",
          name: "company",
          validate: validateCompany,
        },
        {
          type: "list",
          message: "Select the shape of your logo:",
          name: "shape",
          choices: [
            "circle",
            "triangle",
            "square",
          ],
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
      .then((response) => {
        if (response.confirm === "y") {
          const { company, shape, color, textColor } = response;

          let logo;

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
          
          fs.writeFileSync("./examples/logo.svg", logo);
          console.log("Generated logo.svg");
        } else {
          console.log("Let's try that again");
          start();
        }
      });
    }
    
start();


