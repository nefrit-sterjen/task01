import fs from 'fs';

function getThreads(commands) {
    const readable = commands.input !== undefined ?
        fs.createReadStream(commands.input)
        : process.stdin;

    const writable = commands.output !== undefined ?
        fs.createWriteStream(commands.output, {
            flags: 'as+'
        })
        : process.stdout;

    return {writable: writable, readable: readable}

}

export {getThreads}