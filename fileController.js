/*
*
* Подробный принцип работы расписан внизу
* Если захочется поругаться, или что-то обсудить писать в telegram: @NefritSterjen
*
* */


//Контроллер потоков
//Получает уже готовые потоки и обрабатывает их

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
                process.exit(6);
            } else {
                console.log('Finished!')
            }
        }
    );
}


export {run};

