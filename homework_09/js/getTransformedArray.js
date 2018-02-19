/**
 * Function for transformed elements of array
 * @param array
 * @param callback
 * @returns {Array}
 */
function getTransformedArray(array, callback) {
    var newArray = [];
    forEach(array, function (el) {
        newArray.push(callback(el));
    });
    
    return newArray;
}

/**
 * Testing work
 */
function incrementItem(el) {
    return el + 1;
}

console.log(getTransformedArray([1, 67, 12, -10, 45], incrementItem));
