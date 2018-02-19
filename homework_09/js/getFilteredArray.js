/**
 * Function for filtered array items
 * @param array
 * @param callback
 * @returns {Array}
 */
function getFilteredArray(array, callback) {
    var filterArray = [];
    forEach(array, function (el) {
        if(callback(el)) {
            filterArray.push(el);
        }
    });
    
    return filterArray;
}

/**
 * Testing work
 */
function predicateFunction(num) {
    return num > 3;
}

console.log(getFilteredArray([1, 34, 6, 9, -10, 26, -9], predicateFunction));


