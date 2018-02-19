/**
 * Function return decypher string
 * @param characters
 * @param string
 * @returns {string}
 */
function decypherPhrase(characters, string) {
    var reverseCharacters = [];
    for(var i in characters) {
        reverseCharacters[characters[i]] = i;
    }
    
    return cypherPhrase(reverseCharacters, string);
}

/**
 * Testing function
 */

var charactersMap = {a: 'o', c: 'd', t: 'g'};

console.log(decypherPhrase(charactersMap, 'kiggy dog'));


