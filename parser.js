function parse(tokens){
    let position = 0;

    function currentToken(){ // gets the current token
        return tokens[position];
    }
    function advance(){ //changes the current token up by 1
        position++;
    }
    function expect(type, value = null){ //defines when the code should expect whatever type is mentioned.
        const token = currentToken();

        if (!token || token.type !== type || (value !== null && token.value !== value)){
            throw new Error("CHOOOMM!! YOU GOT IT WRONGGG, Expected " + (value || type));
        }
        advance(); //GODDAMN IT, MY SOLDIERS DO NOT BUCKLE OR YIELD, MY SOLDIERS RAGEE!!!

        return token;
    }

    function parseVariableDeclaration(){
        expect("KEYWORD", "LET"); //expects LET

        const name = expect("IDENTIFIER").value; //expects an identifier, ie. variable, to show up next in line.
        expect("EQUALS"); //expects an "="
        
        const value = expect("NUMBER").value; //finally expects a numerical value

        return { //throws everything from before into this AST
            type: "VariableDeclaration",
            name: name,
            value: {
                type: "NumberLiteral",
                value: Number(value)
            }
        }
    }
    return parseVariableDeclaration();
}
module.exports = { parse }