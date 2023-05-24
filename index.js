import fs from "fs";
import inquirer from "inquirer";

function constructShape(html, company, color) {
  const formattedHTML = 
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  ${html}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${company}</text>
</svg>`

  fs.writeFileSync("./examples/yourSVG.svg", formattedHTML);
}

function renderShape(company, shape, color) {
  let html;

  if (shape === "circle") {
    html = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  } else if (shape === "triangle") {
    html = `<polygon points="50,100 150,20 250,100" fill="${color}" />`;
  } else if (shape === "square") {
    html = `<rect x="60" y="20" width="180" height="160" fill="${color}" />`;
  }

  constructShape(html, company, color);
  }


  // function validateCompany(company) {
  //   // Declare function as asynchronous, and save the done callback
  //   const done = this.async();
  
  //   if (company.length > 3) {
  //     console.log("\nCompany name must be no more than 3 characters.");
  //     done("Company name must be no more than 3 characters.");
  //     start(); // Recursive call to restart the prompt
  //   } else {
  //     done(null, true);
  //   }
  // }

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
          type: "list",
          message: "Select the color of your logo:",
          name: "color",
          choices: [
            "red",
            "green",
            "blue",
          ],
        },
        {
          type: "input",
          message: "Press y to make your SVG:",
          name: "confirm",
        },
      ])
      .then((response) => {
        if (response.confirm === "y") {
          const { company, shape, color } = response;
          renderShape(company, shape, color)
        } else {
          console.log("Let's try that again");
          start();
        }
      });
    }
    

    

start();


