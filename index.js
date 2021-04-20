// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the name of your project?"
  },
  {
    name: "desc",
    type: "input",
    message: "Describe your project:"
  },
  {
    name: "install",
    type: "input",
    message: "How do you set up the application?"
  },
  {
    name: "usage",
    type: "input",
    message: "How do you use the application?"
  },
  {
    name: "license",
    type: "rawlist",
    message: "What license do you want to use?",
    choices: [
      'Apache',
      'MIT',
      'None'
    ]
  },
  {
    name: "contrib",
    type: "input",
    message: "How can others contribute to your project?"
  },
  {
    name: "test",
    type: "input",
    message: "Describe tests here:"
  },
  {
    name: "github",
    type: "input",
    message: "What is your github?"
  },
  {
    name: "email",
    type: "input",
    message: "What is your email?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      generateMarkdown(answers);
    });
}

// Function call to initialize app
init();
