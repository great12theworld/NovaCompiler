//testing file

const { tokenize } = require("./lexer");
const { parse } = require("./parser")

let source = "LET age = 16";

const tokens = tokenize(source);

const ast = parse(tokens);
console.log(ast)