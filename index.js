
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// const markDown = require("./utils/generateMarkdown");

inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHub",
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },

    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
    },

    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description",
    },

    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
        type: "suggest",
        message: "What command should be run to install dependencies?",
        name: "dependency",
        suggestions: ["npm i", "npm install", "npm i --save"],
    },

    {
        type: "suggest",
        message: "What command should be run to run tests?",
        name: "test",
        suggestions: ["npm test", "test", "nothing"],
    },

    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "use",
    },

    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
    },
];

// TODO: Create a function to write README file
const writeToFile = (answers) =>
        `## ${answers.title}
## Description
   ${answers.description}
## Table of Contents
## Installation
## Usage
## License
## Contributing
## Tests
## Questions

    Here is a link to my GitHub profile 
        https://github.com/${answers.gitHub}

    If you have an questions feel free to send me an email at 
        ${answers.email}
     `;


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        const readMePageContent = writeToFile(answers);

        fs.writeFile('README2.md', readMePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });

}

// Function call to initialize app
init();
