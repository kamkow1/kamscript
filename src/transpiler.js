import { Num } from "./parser.js";

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