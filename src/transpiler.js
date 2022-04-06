export const transpiler = ast => {
    const opMap = { 
        sum: '+', 
        mul: '*', 
        sub: '-', 
        div: '/' 
    };

    const transpileNode = ast => ast.type === Num ? transpileNum(ast) : transpileOp(ast);

    const transpileNum = ast => ast.val;

    const transpileOp = ast => `(${ast.expr.map(transpileNode).join(' ' + opMap[ast.val] + ' ')})`;

    return transpileNode(ast);
  };