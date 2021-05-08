/*
*
* Подробный принцип работы расписан внизу
* Если захочется поругаться, или что-то обсудить писать в telegram: @NefritSterjen
*
* */


//Тут программа получает уже обработанные argv и на основе создает потоки
//после чего возвращает их в виде json
import fs from 'fs';
import {CesarCipher} from "./cesarCipher.js";

function getThreads(commands) {
    const readable = commands.input !== undefined ?
        fs.createReadStream(commands.input)
        : process.stdin;

    const transform = new CesarCipher(null,commands.shift, commands.action);

    const writable = commands.output !== undefined ?
        fs.createWriteStream(commands.output, {
            flags: 'as+'
        })
        : process.stdout;

    return {writable: writable, transform: transform, readable: readable}

}

export {getThreads}