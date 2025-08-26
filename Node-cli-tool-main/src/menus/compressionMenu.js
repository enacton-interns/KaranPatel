import inquirer from "inquirer";
import { compressFile, decompressFile } from "../commands/compress.js";

export async function compressionMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'choose compression action: ',
            choices: [
                { name: '1) Compress file', value: 'compress' },
                { name: '2) Decompress file', value: 'decompress' }
            ]
        }
    ]);

    const { source, destination } = await inquirer.prompt([
        { type: 'input', name: 'source', message: 'Enter source file path' },
        { type: 'input', name: 'destination', message: 'Enter destination file path ' }
    ]);

    if (action === 'compress') {
        compressFile(source, destination);
    } else {
        decompressFile(source, destination);
    }
}