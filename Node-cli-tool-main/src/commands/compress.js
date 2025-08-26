import fs from 'fs';
import zlib from 'zlib';
import chalk from 'chalk';


export function compressFile(source, destination) {
    const Gzip = zlib.createGzip();
    const src = fs.createReadStream(source);
    const des = fs.createWriteStream(destination);


    src.pipe(Gzip).pipe(des)
        .on('finish', () => console.log(chalk.green(`File Compressed: ${destination}`)))
        .on('error', () => console.log(chalk.red(`compression Failed: `), error.message))

}

export function decompressFile(source, destination) {
    const gunzip = zlib.createGunzip();
    const src = fs.createReadStream(source);
    const des = fs.createWriteStream(destination);

    src.pipe(gunzip).pipe(des)
        .on('finish', () => console.log(chalk.green(`File Decompressed: ${destination}`)))
        .on('error', () => console.log(chalk.red(`Decompression Failed:`), error.message))
}