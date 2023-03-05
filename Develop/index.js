// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your projects title?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "list",
        name: "license",
        message: "What license dows your project require?",
        choices: ["MIT", "GPLv3", "AGPL"]
    },
    {
        type: "input",
        name: "authors",
        message: "Please list all of the authors with a coma and space inbetween.",
    },
    {
        type: "input",
        name: "deployment",
        message: "Enter the URL for your projects deployment.",
    },
    {
        type: "input",
        name: "Usage",
        message: "what is your project used for",
    },
    {
        type: "input",
        name: "installation",
        message: "Please list all other downloads that need to be made inorder to run your application (seprate with a coma and a space)",
    },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      writeToFile('readme.md', generateMarkdown({ ...responses }));
    });
  }
  
  init();

  //module.exports = index;
  