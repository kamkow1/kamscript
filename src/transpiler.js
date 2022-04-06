import { Num } from "./parser.js";
/*import { sum } from './functions.js';
import { sub } from "./functions.js";
import { div } from "./functions.js";
import { mul } from "./functions.js";*/

export const sum = (...operands) => operands.reduce((acc, curr) => acc + curr);

export const sub = (...operands) => operands.reduce((acc, curr) => acc - curr);

export const mul = (...operands) => operands.reduce((acc, curr) => acc * curr, 1);

export const div = (...operands) => operands.reduce((acc, curr) => acc / curr, 0);

export const transpiler = abstractSyntaxTree => {
    const opMap = { 
        sum: '+', 
        mul: '*', 
        sub: '-', 
        div: '/' 
    };

    const transpileNode = abstractSyntaxTree => abstractSyntaxTree.type === Num ? transpileNum(abstractSyntaxTree) : transpileOp(abstractSyntaxTree);

    const transpileNum = abstractSyntaxTree => abstractSyntaxTree.val;
    console.log(abstractSyntaxTree.val + ' !!!');

    const transpileOp = abstractSyntaxTree => `(${abstractSyntaxTree.expr.map(transpileNode).join(' ' + opMap[abstractSyntaxTree.val] + ' ')})`;

    return transpileNode(abstractSyntaxTree);
  };