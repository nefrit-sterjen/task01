import fs from 'fs';
import path from 'path';
import {pipeline} from 'stream';

async function run(inputFile, outputFile) {
    console.log('Start!');

    await pipeline(
        fs.createReadStream(path.join(inputFile)),
        fs.createWriteStream(path.join(outputFile), {flags: 'as+'}),
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

export {run};

