// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "please name your project",
    },
    {
        type: "input",
        name: "description",
        message: "please describe the purpose and functionality of this project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "write your Github username.",
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
