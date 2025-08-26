import inquirer from "inquirer";
import { handleStringTask } from "../commands/string.js";

export async function stringMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'choose string action:',
            choices: [
                { name: '1) Uppercase', value: 'uppercase' },
                { name: '2) Lowercase', value: 'lowercase' },
                { name: '3) Word count', value: 'wordcount' },
                { name: '4) Palindrome check', value: 'palindrome' }
            ]
        }
    ]);


    const { text } = await inquirer.prompt([
        { type: 'input', name: 'text', message: 'Enter text: ' }
    ]);

    handleStringTask(action, text);
}