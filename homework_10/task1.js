/**
 * Your debounce function goes here
 * function(){}
 */
function debounce(callback, timer) {
    let setTime = null;

    return (...args) => {
        const completeFunction = () => {
            callback.apply(this, args);
            setTime = null;
        }

        if(setTime) {
            clearTimeout(setTime);
        }

        setTime = setTimeout(completeFunction, timer);
    }
}

/**
 * Testing function debounce
 *
 */
let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

/**
 * Set the debounce variable and call function
 */
let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
