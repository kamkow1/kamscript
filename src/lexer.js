export const lexer = str => str.split(' ').map(s => s.trim()).filter(s => s.length);