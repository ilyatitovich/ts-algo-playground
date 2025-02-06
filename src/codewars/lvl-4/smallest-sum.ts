/*
Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

if X[i] > X[j] then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).

Example
solution([6, 9, 21]) #-> 9
Solution steps:
[6, 9, 12] #-> X[2] = 21 - 9
[6, 9, 6] #-> X[2] = 12 - 6
[6, 3, 6] #-> X[1] = 9 - 6
[6, 3, 3] #-> X[2] = 6 - 3
[3, 3, 3] #-> X[1] = 6 - 3

Additional notes:
There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.


Solution:

Time Complexity
Finding the GCD for n numbers takes O(n log M) (where M is the maximum number in arr).
The final sum calculation is O(1).
Total: O(n log M).
*/

export function smallestSum(numbers: number[]): number {
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Find GCD of the entire array
  let g = numbers[0];
  for (let num of numbers) {
    g = gcd(g, num);
  }

  // Return sum where all elements become GCD
  return g * numbers.length;
}

// Example:
console.log(smallestSum([6, 9, 21])); // Output: 9
console.log(smallestSum([4, 6, 8])); // Output: 6
console.log(smallestSum([5, 10, 15])); // Output: 15s

/*
Explanation:

This problem is essentially about reducing the elements of the array to their greatest common divisor (GCD) and summing them up.

Understanding the Operation

The given operation:

If X[i] > X[j], then X[i] = X[i] - X[j]

is a variant of the Euclidean algorithm used to compute the greatest common divisor (GCD). This operation repeatedly subtracts smaller numbers from larger ones until all elements become a multiple of the GCD.

Breaking It Down

Let's take an example:

Input:
X = [6, 9, 21]

Find the GCD of the array:

gcd(6, 9) = 3
gcd(3, 21) = 3
So, GCD = 3.
Each number in the array can be rewritten as a multiple of this GCD:

6 = 3 × 2
9 = 3 × 3
21 = 3 × 7
The smallest possible sum occurs when each number is reduced to the GCD itself:

[3, 3, 3]
Sum: 3 + 3 + 3 = 9
General Approach
Compute the GCD of the array.
Replace each element with the GCD.
Return GCD × length of the array (since all elements become the GCD).

*/
