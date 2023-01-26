/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
*/

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0 ));
}
