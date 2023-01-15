function solution (roman) {
    let sum = 0;
    for (let i = 0; i < roman.length - 1; i++){
      let currentNum = roman[i];
      let nextNum = roman[i+1];
      if (getRomanCharValue(currentNum) >= getRomanCharValue(nextNum)) {
        sum += getRomanCharValue(currentNum);
      } else {
        sum -= getRomanCharValue(currentNum);
      }
    }
    
    sum += getRomanCharValue(roman[roman.length - 1]);
    return sum;
  }
  
  function getRomanCharValue(roman){
    // gets the numerical value of a single char of a roman numeral. 
    
    let val = 0;
    
    switch (roman) {
        case 'I':
          val = 1;
          break;
        case 'V':
          val = 5;
          break;
        case 'X':
          val = 10;
          break;
        case 'L':
          val = 50;
          break;
        case 'C':
          val = 100;
          break;
        case 'D':
          val = 500;
          break;
        case 'M':
          val = 1000;
          break;
      }
        return val;
  }
