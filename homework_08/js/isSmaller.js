/**
 * The function returns true if argument a is greater than argument b
 *
 * @param a
 * @param b
 * @returns {boolean}
 */
function isBigger(a, b) {
    if(Number(a) && Number(b)) {
        return (a > b);
    }
}


/**
 * The function returns true if argument a is lesser than argument b
 */
function isSmailler(a, b) {
    var result = isBigger(a, b);
    if(typeof result !== 'undefined') {
        return !result;
    } else {
        console.log('Incorrectly transmitted arguments.');
    }
}
