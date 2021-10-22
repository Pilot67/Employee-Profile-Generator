const inquirer = require('inquirer');
const fs = require('fs/promise');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const companyEmployee = [];
let role = "manager"

const rolePrompt = [
    {
        type: "input",
        name: "name",
        message: `Please enter the ${role}'s name -`,
    },
    {
        type: "input",
        name: "id",
        message: `Please enter the ${role}'s employee's ID -`,
    },
    {
        type: "input",
        name: "email",
        message: `Please enter the ${role}'s email address -`,
    },  
    {
        type: "input",
        name: "officeNumber",
        message: `Please enter the office phone number`,
    },
];