// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What was your motivation?.",
    },
    {
        type: "input",
        name: "description",
        message: "describe the purpose of this project. What problem does it solve?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "what license will you be using with this project (if any).",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any dependencies used in this project.",
    },
    {
        type: "input",
        name: "usage",
        message: "what languages were used in this project?",
    },
    {
        type: "input",
        name: "description",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "creator",
        message: "Github username.",
    },
    {
        type: "input",
        name: "name",
        messages: "State your full name.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List any helping contributors (if any).",
        default: "",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/READE.md", generateMarkdown({...responses }));
    });
}

// Function call to initialize app
init();

