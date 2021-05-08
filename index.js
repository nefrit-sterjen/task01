/*
*
* Подробный принцип работы расписан внизу
* Если захочется поругаться, или что-то обсудить писать в telegram: @NefritSterjen
*
* */


//Точка входа. Программа запускается отсюда

import {run} from "./fileController.js";
import {getThreads} from "./threads.js";
import {getCommands} from "./argvController.js";

const commands = getThreads(getCommands(process.argv))

run(commands.readable, commands.transform, commands.writable);
