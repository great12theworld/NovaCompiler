const { tokenize } = require("./lexer");

let source = "LET age = 16";

console.log(tokenize(source))