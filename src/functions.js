export const sum = (...operands) => operands.reduce((acc, curr) => acc + curr);

export const sub = (...operands) => operands.reduce((acc, curr) => acc - curr);

export const mul = (...operands) => operands.reduce((acc, curr) => acc * curr, 1);

export const div = (...operands) => operands.reduce((acc, curr) => acc / curr, 0);