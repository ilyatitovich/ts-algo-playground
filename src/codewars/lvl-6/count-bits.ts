/*
https://www.codewars.com/kata/526571aae218b8ee490006f4

Write a function that takes an integer as input,
and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010,
so the function should return 5 in this case

*/

export function countBits(n: number): number {
  return n.toString(2).replace(/0/g, "").length;
}

/*
Explanation:

n.toString(2) → Converts the number to its binary string representation.
.split("0").join("") → Removes all 0s, leaving only 1s.
.length → Counts the remaining 1s.
*/
