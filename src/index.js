#! /usr/bin/env node

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
        let path = str;

        const pathElements = str.split('/');
        const name = pathElements[pathElements.length - 1];

        if (!name.includes('.ks')) {

            const pathWithIndex = path + '/index.ks';
            console.log(pathWithIndex);

            if (fs.existsSync(pathWithIndex)) {
                path = pathWithIndex;
            } else {
                console.error('file extension not recognized! only .ks files are executable');
                return;
            }
        }

        const code = fs.readFileSync(path).toString('ascii');

        const transpiledProgram = transpiler(parser(lexer(code)));
        const result = eval(transpiledProgram);

        console.info(transpiledProgram);
        console.info(result);
    });

program.parse();

