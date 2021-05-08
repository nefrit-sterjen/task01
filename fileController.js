import {pipeline} from 'stream';

async function run(inputStream, transformStream, outputStream) {
    console.log('Start!');

    await pipeline(
        inputStream,
        transformStream,
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

