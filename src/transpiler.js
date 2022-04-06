export const transpiler = ast => {
    const opMap = { 
        sum: '+', 
        mul: '*', 
        sub: '-', 
        div: '/' 
    };

    const transpileNode = abstractSyntaxTree => abstractSyntaxTree.type === Num ? transpileNum(abstractSyntaxTree) : transpileOp(abstractSyntaxTree);

    const transpileNum = abstractSyntaxTree => abstractSyntaxTree.val;

    const transpileOp = abstractSyntaxTree => `(${abstractSyntaxTree.expr.map(transpileNode).join(' ' + opMap[abstractSyntaxTree.val] + ' ')})`;

    return transpileNode(abstractSyntaxTree);
  };