import { parser } from "./parser.js";
import { transpiler } from "./transpiler.js";
import { lexer } from "./lexer.js";

import fs from 'fs';
import { program } from "commander";

program.option('-p', '--path <dir>').parse(process.argv);

const path = program.path;
const code = fs.readFileSync(path).toString('ascii');

//const program = 'divide 3 2';

const transpiledProgram = transpiler(parser(lexer(code)));
const result = eval(transpiledProgram);

console.info(transpiledProgram);
console.info(result);