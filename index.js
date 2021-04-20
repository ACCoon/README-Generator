// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "projName",
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
      'MIT',
      'Apache',
      'None'
    ]
  },
  {
    name: "contrib",
    type: "input",
    message: "List any contributors that have added to the project:"
  },
  {
    name: "test",
    type: "input",
    message: "Describe tests here:"
  },
  {
    name: "questions",
    type: "input",
    message: "Are there any questions about your project?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
