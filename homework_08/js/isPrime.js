/**
 * Checking the whole number
 */
function isPrime(number) {
    if(Number(number)) {
        return number % 1 === 0;
    } else {
        console.log('Incorrect data!');
    }
}
