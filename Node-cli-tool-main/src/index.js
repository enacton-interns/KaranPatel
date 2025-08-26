#!/usr/bin/env node

import dotenv from 'dotenv';

dotenv.config();


import inquirer from 'inquirer';
import chalk from 'chalk';

import { compressionMenu } from './menus/compressionMenu.js';
import { fetchMenu } from './menus/fetchMenu.js';
import { stringMenu } from './menus/stringMenu.js';

async function mainMenu() {
    while (true) {
        console.clear();
        console.log(chalk.cyan('=== My CLI Tool === \n'));

        const { tasktype: taskType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'tasktype',
                message: 'select the task:',
                choices: [
                    { name: '1) File Compression', value: 'compression' },
                    { name: '2) String Manipulation', value: 'string' },
                    { name: '3) Fetch from API', value: 'fetch' },
                    { name: 'Exit', value: 'exit' }
                ]
            }

        ]);

        if (taskType === 'exit') {
            console.log(chalk.green('Goodbye! 👋'));
            process.exit(0);
        }

        switch (taskType) {
            case 'compression':
                await compressionMenu();
                break;
            case 'string':
                await stringMenu();
                break;
            case 'fetch':
                await fetchMenu();
                break;
        }

        console.log(chalk.gray('\nPress Enter to return to main menu...'));
        await inquirer.prompt([{ type: 'input', name: 'continue', message: '' }]);

    }
}

mainMenu();