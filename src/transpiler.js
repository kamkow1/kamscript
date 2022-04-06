import { Num } from "./parser.js";
import { add } from './functions.js';
import { subtract } from "./functions.js";
import { divide } from "./functions.js";
import { multiply } from "./functions.js";

export const transpiler = abstractSyntaxTree => {
    const opMap = { 
        add: '+', 
        multiply: '*', 
        subtract: '-', 
        divide: '/' 
    };

    const transpileNode = abstractSyntaxTree => abstractSyntaxTree.type === Num ? transpileNum(abstractSyntaxTree) : transpileOp(abstractSyntaxTree);

    const transpileNum = abstractSyntaxTree => abstractSyntaxTree.val;

    const transpileOp = abstractSyntaxTree => `(${abstractSyntaxTree.expr.map(transpileNode).join(' ' + opMap[abstractSyntaxTree.val] + ' ')})`;

    return transpileNode(abstractSyntaxTree);
  };