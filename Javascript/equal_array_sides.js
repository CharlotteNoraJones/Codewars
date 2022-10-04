/*
You are going to be given an array of integers. Your job is to take that array and find 
an index N where the sum of the integers to the left of N is equal to the sum of the 
integers to the right of N. 
If there is no index that would make this happen, return -1.
*/

function findEvenIndex(arr)
{
  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let left_arr = arr.slice(0, i);
    let right_arr = arr.slice(i+1);
    let left_sum = left_arr.reduce((partialSum, a) => partialSum + a, 0);
    let right_sum = right_arr.reduce((partialSum, a) => partialSum + a, 0);

    if (left_sum == right_sum) {
        console.log("Hello")
        return i;
    }
  }

  return -1;

}

console.log(findEvenIndex([20,10,-80,10,10,15,35]))