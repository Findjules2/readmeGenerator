const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "contactemail"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "default",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repo"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribute"
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),  err=>{
        if (err) throw err
        console.log('...saving')
    })
}

function init() {
inquirer.prompt(questions).then(function(answers) {
   // console.log(answers)
    api.getUser(answers.username).then(
        ({data}) => {
            writeToFile('test.md', {...data, ...answers})
        }
    )
})
}

init();
