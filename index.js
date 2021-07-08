//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));


//An array of questions for user input
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
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
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

//Function that writes README file
const writeToFile = (answers) =>
        `## ${answers.title}

![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-green.svg)

## Description
   ${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
        ${answers.dependency}
## Usage
        ${answers.use}
## License
        ${answers.license}
## Contributing
        ${answers.contributing}
## Tests
        ${answers.test}
## Questions

My GitHub username is ${answers.gitHub}
Here is a link to my [GitHub](#https://github.com/${answers.gitHub}) 

If you have an questions feel free to send me an email at 
    ${answers.email}
     `;


//Initialize the app
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
