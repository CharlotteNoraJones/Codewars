/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function moveZeros(arr) {
    while (!checkZeroEnd(arr)) {
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === 0) {
                arr = swap(arr, i, i + 1);
            }
        }    
    }
    return arr;
}

function swap(arr, x, y) {
    // Does nothing if x or y is greater than the array's length. 
    if (Math.max(x, y) <= arr.length) {
        let temp = arr[y];
        arr[y] = arr[x];
        arr[x] = temp;
    }
    return arr;
}

function checkZeroEnd(arr) {
    /* Returns true if all zeroes are at the end of the array, 
    or if there are no zeroes in the array. */
    if (!arr.includes(0)) {
        return true;
    }
    return arr.slice(arr.indexOf(0)).every(val => { return val === 0 });
}
