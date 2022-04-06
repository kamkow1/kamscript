export const Op = Symbol('op');
export const Num = Symbol('num');

export const parser = (tokens) => {
    let c = 0;
    
    const peek = () => tokens[c];
    const consume = () => tokens[c++];

    const parseNum = () => ({ val: parseInt(consume()), type: Num });

    const parseOp = () => {
        const node = { 
            val: consume(), 
            type: Op, 
            expr: [] 
        };

        while (peek()) node.expr.push(parseExpression());
        return node;
    };

    const parseExpression = () => /\d/.test(peek()) ? parseNum() : parseOp();

    return parseExpression();
};