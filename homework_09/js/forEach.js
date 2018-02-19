/**
 * Function foreach for array and callback function for element of array
 *
 * @param array
 * @param callback
 */
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

/**
 * Testing work
 */
forEach([3, 56, 67, 12, -19, 34], function (el) {
    console.log(el);
});

