import fs from "fs";
import inquirer from "inquirer";

function constructShape(html, company, color, textColor) {
  const formattedHTML = 
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  ${html}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${company}</text>
</svg>`

  fs.writeFileSync("./examples/logo.svg", formattedHTML);
  console.log("Generated logo.svg");
}

function renderShape(company, shape, color, textColor) {
  let html;

  if (shape === "circle") {
    html = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  } else if (shape === "triangle") {
    html = `<polygon points="50,100 150,20 250,100" fill="${color}" />`;
  } else if (shape === "square") {
    html = `<rect x="60" y="20" width="180" height="160" fill="${color}" />`;
  }

  constructShape(html, company, color, textColor);
  }

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
          renderShape(company, shape, color, textColor)
        } else {
          console.log("Let's try that again");
          start();
        }
      });
    }
    

    

start();


