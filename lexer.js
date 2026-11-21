function tokenize(source){ //takes in source code
    const tokens = []; //makes array to store tokens

    let position = 0;
    while (position < source.length){
        const char = source[position];

        if (/\s/.test(char)){ //remove whitespace
            position++;
            continue;
        }

        if (/[0-9]/.test(char)) {
            let number = "";

            while (position < source.length && /[0-9]/.test(source[position])) { //gets entire numbers
                    number += source[position];
                    position++;
                }

                tokens.push({
                    type: "NUMBER",
                    value: number
                });

                continue;
        }

        if(/[a-zA-Z_]/.test(char)){
            let word = "";

            while (position < source.length && /[a-zA-Z0-9_]/.test(source[position])) {
                word += source[position];
                position++;
            }

            const keywords = ["LET", "PRINT"]; //for now

            if (keywords.includes(word)) {
                tokens.push({
                    type: "KEYWORD",
                    value: word
                });
            } else {
                tokens.push({
                    type: "IDENTIFIER",
                    value: word
                });
            }
            continue;
        }
        const operators = {
            "=": "EQUALS",
            "+": "PLUS",
            "-": "MINUS",
            "*" : "MULTIPLY",
            "/" : "DIVIDE"
        }
        if (operators[char]){
            tokens.push({type: operators[char], value:char});
            position++;
            continue;
        }
        
        throw new Error("Unexpected character gonk, chipper in already!! : $(char)");

    }

    return tokens; //returns the array of tokens
}
module.exports = { tokenize } //allows sharing code between files.