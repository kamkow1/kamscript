import { parser } from "./parser.js";
import { transpiler } from "./transpiler.js";
import { lexer } from "./lexer.js";

const program = 'divide 3 2';

const transpiledProgram = transpiler(parser(lexer(program)));
const result = eval(transpiledProgram);

console.info(transpiledProgram);
console.info(result);