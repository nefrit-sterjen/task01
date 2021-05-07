import {run} from "./fileController.js";
import fs from 'fs';
import path from 'path';

const readStream = fs.createReadStream(process.argv[2])
const writeStream = fs.createReadStream(process.argv[2])

run(process.argv[2], process.argv[3]);
