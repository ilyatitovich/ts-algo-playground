/*
Given an array of positive or negative integers

 I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

Solution:

Complexity Analysis
Prime Factorization: O(√M), where M is the largest number.
Looping Through Array: O(N).
Sorting Factors: O(K log K), where K is the number of unique primes.
Overall Complexity: O(N√M + K log K), which is efficient for reasonable input sizes.

*/

export function sumByPrimeFactors(nums: number[]): number[][] {
  function getPrimeFactors(n: number): Set<number> {
    let num = Math.abs(n);
    let factors = new Set<number>();

    while (num % 2 === 0) {
      factors.add(2);
      num /= 2;
    }
    for (let i = 3; i * i <= num; i += 2) {
      while (num % i === 0) {
        factors.add(i);
        num /= i;
      }
    }
    if (num > 1) {
      factors.add(num);
    }
    return factors;
  }

  let factorSums: Record<number, number> = {};

  for (const num of nums) {
    for (const factor of getPrimeFactors(num)) {
      factorSums[factor] = (factorSums[factor] || 0) + num;
    }
  }

  return Object.entries(factorSums)
    .map(([prime, sum]) => [parseInt(prime), sum])
    .sort((a, b) => a[0] - b[0]);
}

// Example usage:
console.log(sumByPrimeFactors([12, 15])); // [[2, 12], [3, 27], [5, 15]]
console.log(sumByPrimeFactors([18, 45, 30])); // [[2, 48], [3, 93], [5, 30]]
