/**
 *  Function return replace string
 * @param characters
 * @param string
 * @returns {string}
 */
function cypherPhrase(characters, string) {
   var transformArray = getTransformedArray(string.split(''), function (el) {
       return characters[el] || el;
   });
    
    return transformArray.join('');
}

/**
 * Tested function
 */
var charactersMap = {a: 'o', c: 'd', t: 'g'};

console.log(cypherPhrase(charactersMap, 'kitty cat'));