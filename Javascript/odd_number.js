/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
    let oddNum = 0;
    A.forEach((num) => {
        let onlyCurrentNum = A.filter(x => x == num);
        if (onlyCurrentNum.length % 2 == 1) {
            oddNum = num;
        }
    });
    return oddNum;
}

let test_array = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
console.log(findOdd(test_array));