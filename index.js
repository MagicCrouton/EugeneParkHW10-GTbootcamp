
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const Utilites = require('./Utilites/questionStorage.js');
const team = [];

console.log('lets build your team');
console.log('starting with your manager');

async function newManager(){
await inquirer.prompt(Utilites.QuestionIndex.Manager).then((response) => {
    const lead = new Manager(response.Name, response.id, response.email, response.officeNumber);
    team[0] = lead;})
}

async function newEngineer() {
await inquirer.prompt(Utilites.QuestionIndex.Engineer).then((response) =>{
    let temp = new Engineer (response.Name, response.id, response.email, response.gitHub)
    team.push(temp)
})}

async function newIntern() {
await inquirer.prompt(Utilites.QuestionIndex.Intern).then((response) =>{
      let temp = new Intern (response.Name, response.id, response.email, response.School)
      team.push(temp)
})}

async function teammate(){
    let i = false;
    while (i===false)
    await inquirer.prompt(Utilites.listQuestion).then(async (response)=> {
        if (response.nextTeam === 'no more Members'){
            // checks to see if the user want's to stop adding team members
            i = true;
        }
        else if (response.nextTeam === 'Engineer') {
           await newEngineer();
            }
        else {
            await newIntern();
            }
           })
}


async function run () {
    await newManager();
    await teammate();
    console.log(team);
}

run();


// init();
// function teamBuild () {
//     let i = false;
//     while (i===false) {
//     inquirer.prompt(Utilites.listQuestion).then((response)=> {
//             if (response.nextTeam === 'no more Members'){
//                 // checks to see if the user want's to stop adding team members
//                 i = true;
//             }
//             else {
//             let current = response.nextTeam;
//                 if (current === 'Engineer'){
//                     newEngineer()
//                 }
//                 else {
//                     newIntern()
//                 }
//             }})
//         }}

// async function init() {
//     await manager();
//     // await teamBuild()
// }
// async function teammate(){
//     let i = false;
//     while (i===false)
//     await inquirer.prompt(Utilites.listQuestion).then((response)=> {
//         if (response.nextTeam === 'no more Members'){
//             // checks to see if the user want's to stop adding team members
//             i = true;
//         }
//         else {
//             // this takes the response and pulls from questionIndex the right set of questions for forming an object
//            let current = response.nextTeam;
//            inquirer.prompt(Utilites.QuestionIndex.current).then((response) =>{
//             if (current === 'Engineer'){
//                 let temp = new Engineer (response.Name, response.id, response.email, response.gitHub)
//                 team.push(temp)
//             }
//             else {
//                 let temp = new Intern (response.Name, response.id, response.email, response.School)
//                 team.push(temp)
//             }
//            })
//     }})
// }

// function init(){
//     // await manager();
//     teammate();
//     // await console.log(team);
// }
