import { parser } from "./parser.js";
import { transpiler } from "./transpiler.js";
import { lexer } from "./lexer.js";

import fs from 'fs';
import { Command } from "commander";

const program = new Command();

program.name('ks');

program
    .command('exec')
    .argument('<string>', 'path to file')
    .action((str) => {
        const pathElements = str.split('/');

        if (!pathElements[pathElements.length - 1].includes('.ks')) {
            console.error('file extension not recognized! only .ks files are executable');
            return;
        }

        const path = str;
        const code = fs.readFileSync(path).toString('ascii');

        const transpiledProgram = transpiler(parser(lexer(code)));
        const result = eval(transpiledProgram);

        console.info(transpiledProgram);
        console.info(result);
    });

program.parse();

