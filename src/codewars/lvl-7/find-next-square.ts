/*

https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/typescript

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

*/

export function findNextSquare(sq: number): number {
  const num = Math.sqrt(sq);
  return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}

findNextSquare(121);
