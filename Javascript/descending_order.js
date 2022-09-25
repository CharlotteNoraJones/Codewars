/*
Your task is to make a function that can take any non-negative integer as an argument and 
return it with its digits in descending order. Essentially, rearrange the digits to 
create the highest possible number.
*/

// parseInt(String(n).split('').sort().reverse().join('')) is the solution most people went with
// I know that was an option, but it was fun to mess with the 10 to the index power solutions. S

function descendingOrder(n){
    let n_array = int_to_array(n);
    n_array.sort((a, b) => b - a);
    return array_to_int(n_array)
  }
  
  function int_to_array(n) {
    // Returns an array of all the numbers in int n

    let num_array = [];
    let digits = n.toString().length;
    for (let i = digits - 1; i >= 0; i--) {
        let highest_digit = Math.floor(n / Math.pow(10, i));
        num_array.push(highest_digit);
        n = n - highest_digit * Math.pow(10, i);
    }
    return num_array;
  }

  function array_to_int(num_array){
    // Takes in an array of ints, returns an int with each array element in order. 
    let n = 0;
    let digits = num_array.length;
    num_array.forEach(num => {
        n += num * (Math.pow(10, digits - 1));
        digits--;
    });
    return n;
  }

