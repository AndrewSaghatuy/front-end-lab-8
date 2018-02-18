/**
 * Get the closest value to zero
 */
function getClosestToZero() {
    if(arguments.length) {
        var near = arguments[0];
        for(var i = 0; i < arguments.length; i++) {
            if(Math.abs(near) > Math.abs(arguments[i])) {
                near = arguments[i];
            }
        }
        return near;
    } else {
        console.log('Incorrect data');
    }
}