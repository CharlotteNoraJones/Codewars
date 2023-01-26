/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

function moveZeros(arr) {
    
    while (!checkZeroEnd(arr)){
        let firstZeroIndex = arr.indexOf(0);
        let indextoSwap = firstZeroIndex + 1;
        while (arr[indextoSwap] === 0) {
            indextoSwap += 1;
        }

        arr = swap(arr, firstZeroIndex, indextoSwap);
    }

    return arr;
}

function swap(arr, x, y) {
    let temp = arr[y];
    arr[y] = arr[x];
    arr[x] = temp;
    return arr;
}

function checkZeroEnd(arr){
    /* Returns true if all zeroes are at the end of the array, 
    or if there are no zeroes in the array. */

    if (!arr.includes(0)) {
        return false;
    }

    return arr.slice(arr.indexOf(0)).every(val => {return val === 0});
}
