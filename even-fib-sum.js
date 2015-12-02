/*
  Project Euler - Problem 2

  By considering the terms in the Fibonacci sequence whose values
  do not exceed four million, find the sum of the even-valued terms.
*/

function evenFibSum(max) {
    var arr = [1,2];
    var n;
    var sum = 2;

    while((n = arr[0] + arr[1]) < max) {
        arr.shift();
        arr.push(n);
        if (n % 2 === 0) sum += n;
    }

    return sum;
}

console.log(evenFibSum(4000000));