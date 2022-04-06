import { parser } from "./parser.js";
import { transpiler } from "./transpiler.js";
import { lexer } from "./lexer.js";

const program = 'mul 3 2';

let transpiledProgram = transpiler(parser(lexer(program)));
console.log(transpiledProgram);
console.log(lexer(program));
console.log(parser(lexer(program)));