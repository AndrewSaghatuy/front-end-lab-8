/**
 * Get the reverse number
 *
 * @param number
 * @returns {Number}
 */
function reverseNumber(number) {
    if(Number(number) && number % 1 === 0) {
        number = number.toString();
        if(number.search(/0+$/g) !== -1) {
            number = number.replace(/0+$/g, '');
        }
        if(number.search(/-/g) !== -1) {
            number = number.replace(/-/g, '');
            number += '-';
        }
        return parseInt(number.split('').reverse().join(''));
    } else {
        console.log('Incorrect data!');
    }
}