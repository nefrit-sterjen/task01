import fs from 'fs';
import path from 'path';
import {pipeline} from 'stream';

async function run(inputStream, outputStream) {
    console.log('Start!');

    await pipeline(
        inputStream,
        outputStream,
        err => {
            if (err) {
                console.log(err.message)
                process.exit(1);
            } else {
                console.log('Finished!')
            }
        }
    );
}

//Duplex transform чекать в документации для потока шифрования

export {run};

