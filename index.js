import fs from "fs";
import inquirer from "inquirer";

function start() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of your company (Note: shorter names look better ;) )?",
          name: "company",
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
          const data = {
            company: response.company,
            shape: response.shape,
            color: response.color,
            
          };
  
          const SVG = render(data);
          fs.writeFileSync("./examples/yourSVG.svg", SVG);
        } else {
          console.log("Let's try that again");
          start();
        }
      });
}

start();
