function findFactorialRecursive(value){
   if(value === 1) return value;
   return value * findFactorialRecursive(value - 1);
}

function findFactorialIterative(value){
    let factorial = value;
    
    while(value !== 1){
        value -= 1;
        factorial *= value;
    }

    return factorial;
}


function findIndexOfFibonacciNumberRecursive(number, x, y, count){
    if (x || x === 0) console.log(`--> ${x}`);
    if(number === 0) return 0;
    if(number === 1) return 1;
    if(y === number) return count;
    if(y > number) return "Not in the series";
    if(!x && !y) return findIndexOfFibonacciNumberRecursive(number, 0, 1, 1);
    return findIndexOfFibonacciNumberRecursive(number, y, y + x, count+= 1);
}

function findIndexOfFibonacciNumberIterative(number){
    let count = 0;
    let x;
    let y;
    
    while(true){
    if (x || x === 0) console.log(`--> ${x}`);
    if(number === 0) return 0;
    if(number === 1) return 1;
    if(y === number) return count;
    if(y > number) return "Not in the series";
    if(!x && !y){
          x = 0;
          y = 1;
          count = 1;
      }
      else {
          let temp = x;
          x = y;
          y = temp + x;
          count += 1;
      }
    }
}