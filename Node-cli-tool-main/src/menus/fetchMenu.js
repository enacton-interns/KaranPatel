import inquirer from "inquirer";
import { fetchData } from "../commands/fetch.js";

export async function fetchMenu() {
    const { type } = await inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'choose data to fetch:',
            choices: [
                { name: '1) joke', value: 'joke' },
                { name: '2) weather', value: 'weather' }
            ]
        }
    ]);

    if (type === 'weather') {
        const { city } = await inquirer.prompt([
            { type: 'input', name: 'city', message: 'Enter city name: (DEFAULT:LONDON): ', default: 'London' }
        ]);
        await fetchData(type, city);

    } else {
        await fetchData(type);
    }

}