import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {
        type: 'list',
        name: 'fruit',
        message: 'Pick a fruit:',
        choices: ['Apple', 'Banana', 'Orange']
    }
]);

console.log('You picked:', answer.fruit);

export default answer.fruit;