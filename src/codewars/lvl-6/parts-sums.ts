/*
Time Complexity

O(n) for initial reduce
O(n) for the loop
Total: O(n)

*/

export function partsSums(ls: number[]): number[] {
  const result: number[] = new Array(ls.length + 1);
  let sum = ls.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < ls.length; i++) {
    result[i] = sum;
    sum -= ls[i];
  }

  result[ls.length] = 0; // Final empty array sum
  return result;
}

console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
console.log(partsSums([1, 2, 3, 4, 5, 6])); // [21, 20, 18, 15, 11, 6, 0]
console.log(partsSums([])); // [0]
console.log(partsSums([5])); // [5, 0]
