export const sum = (...operands) => operands.reduce((acc, curr) => acc + curr);

export const subtract = (...operands) => operands.reduce((acc, curr) => acc - curr);

export const multiply = (...operands) => operands.reduce((acc, curr) => acc * curr, 1);

export const divide = (...operands) => operands.reduce((acc, curr) => acc / curr, 0);