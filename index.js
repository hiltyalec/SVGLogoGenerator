//CONSTANT VARIABLES THAT REQUIRED FOR NODE MODULES.
const inquirer = require("inquirer");
const fs = require("fs");

// THIS IMPORTS THE SHAPE CLASSES FROM THE "./lib/shapes" MODULE
const { Square, Triangle, Circle } = require("./lib/shapes");

// INQUIRER PROMPTS TO ASK USERS QUESTIONS AND HAVE THEM ANSWER. THEIR INPUT WILL BE THEN SAVED.
function promptUser() {
  inquirer
    .prompt([
      //USER TO ENTER LETTER CHARACTERS
      {
        type: "input",
        name: "text",
        message:"Enter a maximum of 3 letters to display for your logo:",
        // Validate function to prevent more than 3 characters & empty input string.
        validate: (input) => {
            const validLength = input.length <= 3;
            const validInput = input.trim() !== '';
            if (!validLength) {
              return 'Please enter up to three characters only.';
            }
            if (!validInput) {
              return 'Empty inputs are not allowed, please try again.';
            }
            return true;
        },
              },
      //USER TO INPUT THE TEXT COLOUR THAT WANT FOR LOGO
      {
        type: "input",
        name: "textColour",
        message:"Enter a valid colour or #Hexcode for your letters:",
      },
      //USER TO SELECT THEIR LOGO SHAPE OF CHOICE
      {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be? Select one below:",
        choices: ["Square", "Triangle", "Circle"],
      },
      //USER TO INPUT A SHAPE COLOUR FOR THEIR LOGO
      {
        type: "input",
        name: "colourOfShape",
        message:"Enter a valid colour or #Hexcode for your logo's shape:",      
      },
    ])

//PROMISE CALLBACK FUNCTION THAT RUNS AFTER THE USER INPUTS SOME TEXT    
    .then((answers) => {
      // IF THE USER INPUT IS LONGER THAN 3 CHARACTERS, PROMPT THEM TO INPUT AGAIN. OTHERWISE, WRITE THE USER INPUT TO THE "LOGO.SVG" FILE
      if (answers.text.length > 3) {
        console.log("Maxium of 3 characters only, please try again:");
        promptUser();  
      } else { saveAnswersToFile
        saveAnswersToFile("logo.svg", answers);
      }
    });
}

//FUNCTION RESPONSIBLE FOR CREATING THE SVG FILE USING THE USERS ANSWERS OBTAINED FROM THE INQUIRER PROMPTS.
function saveAnswersToFile(fileName, answers) {
    //INITIALIZES AN EMPTY STRONG
    let logoSvgCode = "";
    //INITIALIZES THE logoSvgCode VARIABLE WITH A SVG STRING WHICH DEFINES THE PARAMS OF THE SVG ELEMENT.
    logoSvgCode =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    //<g> TAG TO APPEND TO THE logoCvgCode VARIABLE. THE TAG IS USED TO GROUP THE SVG SHAPES TOGETHER, AND IN THIS CASE IT IS BEING USED TO GROUP THE TEXT & POLYGON ELEMENT
    logoSvgCode += "<g>";
    //APPENDS THE USER-SELECTED SHAPE TO THE logoSvgCode VARIABLE. IT DYNAMICALLY INSERTS THE SELECTED SHAPE INTO THE SVG CODE THAT WILL BE WRITTN TO THE FILE.
    logoSvgCode += `${answers.shape}`;
  
//DEPENDING ON THE USERS SHAPE CHOICE, THIS CONDITIONAL BLOCK ADDS POLYGON PARAMETERS TO THE LOGOSVGCODE
    let shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      logoSvgCode += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.colourOfShape}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      logoSvgCode += `<rect x="50" y="50" width="200" height="100" fill="${answers.colourOfShape}"/>`;
    } else {
      shapeChoice = new Circle();
      logoSvgCode += `<circle cx="150" cy="100" r="80" fill="${answers.colourOfShape}"/>`;
    }
  
//ADDS A TEXT ELEMENT TO THE SVG WITH THE USERS CHOSEN TEXT COLOUR AND FONT SIZE OF 50 AND CENTRED WITHIN THE LOGO CONTAINER.
    logoSvgCode += `<text x="150" y="125" text-anchor="middle" font-size="50" fill="${answers.textColour}">${answers.text}</text>`;
    //CLOSING TAGS TO WRAP AROUND THE TEXT ELEMENT AND CLOSE THE ENTIRE SVG FILE.
    logoSvgCode += "</g>";
    logoSvgCode += "</svg>";
  
// GENERATES SVG CODE TO T FILE USING THE FILE SYSTEM WITH THE GIVEN FILENAME AND LOGS ANY ERRORS OR A SUCCESS MESSAGE TO THE CONSOLE.
    fs.writeFile(fileName, logoSvgCode, (err) => {
      err ? console.log(err) : console.log("logo.svg has been gererated! Woohoo!");
    });
  }

//FUNCTION CALL THAT PROMPTS THE USER INPUT
promptUser();