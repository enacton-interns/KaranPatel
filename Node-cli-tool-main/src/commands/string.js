import chalk from "chalk";

export function handleStringTask(task, text) {
    switch (task) {
        case 'uppercase':
            console.log(chalk.blue(text.toUpperCase()));
            break;
        case 'lowercase':
            console.log(chalk.blue(text.toLowerCase()));
            break;
        case 'wordcount':
            console.log(chalk.yellow(`Word count: ${text.trim().split(/\s+/).length}`));
            break;
        case 'palindrome':
            const cleaned = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            const ispalindrom = cleaned === cleaned.split().reverse().join('');
            console.log(chalk.magenta(`is palindrome? ${ispalindrom}`));
            break;

        default:
            console.error(chalk.red('✖ Unknown string task. Try: uppercase, lowercase, wordcount, palindrome'));
            break;
    }
}