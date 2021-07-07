
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// const markDown = require("./utils/generateMarkdown");

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
];

// TODO: Create a function to write README file
const writeToFile = (answers) =>
    `## ${answers.title}`;


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
