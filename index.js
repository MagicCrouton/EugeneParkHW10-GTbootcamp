
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const Utilites = require('./Utilites/questionStorage.js')

console.log('lets build your team');
console.log('starting with your manager');

inquirer.prompt(Utilites.QuestionIndex.Manager).then()