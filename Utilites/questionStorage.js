const QuestionIndex = 
      {
        Manager: [
            {
                type: 'input',
                name: 'Name',
                message: 'What is your Managers Name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Managers id#',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Managers Email',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your Managers Office Number?',
            },           
        ],
        Engineer:[
            {
                type: 'input',
                name: 'Name',
                message: 'What is your Engineers Name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Engineers id#',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Engineers Email',
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is your Engineers gitHub ID?',
            },              
        ],
        Intern: [
            {
                type: 'input',
                name: 'Name',
                message: 'What is your Interns Name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your Interns id#',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Interns Email',
            },
            {
                type: 'input',
                name: 'School',
                message: 'Where does your Intern go to School?',
            },  
        ],
      } 

const listQuestion = [
    {
        type: 'list',
        message: 'Do you want another team member?',
        name: 'nextTeam',
        choices: ['Engineer', 'Intern', 'no more Members']
    }     
]


module.exports = {
    QuestionIndex,
    listQuestion
}
