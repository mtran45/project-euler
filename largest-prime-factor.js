/*
  Project Euler - Problem 3

  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (var i=2;i<n;i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function largestPrimeFactor(n) {
    if (n <= 1) return 0;
    var largest = 0;
    for (var i=2;i<n;i++) {
        if ((n % i === 0) && isPrime(i)) largest = i;
    }
    return largest;
}

console.log(largestPrimeFactor(13195)); // => 29

/**
 * More efficient implementation.
 * Adapted from http://stackoverflow.com/a/412942
 */
function largestPrimeFactorMagic(n) {
    if (n <= 1) return 0;
    for (var i=2;i*i<n;i++) {
        while (n % i === 0) n /= i;
    }
    return n;
}

console.log(largestPrimeFactorMagic(600851475143));
// => 6857