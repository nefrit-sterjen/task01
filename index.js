import {run} from "./fileController.js";
import {getThreads} from "./threads.js";
import {getCommands} from "./argvController.js";

const commands = getThreads(getCommands(process.argv))

run(commands.readable, commands.writable);
