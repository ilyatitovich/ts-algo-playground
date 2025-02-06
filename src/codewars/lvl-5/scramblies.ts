/*
Time Complexity

O(n) to build charCount
O(m) to check str2
Total: O(n + m)

*/

export function scramble(str1: string, str2: string): boolean {
  if (str1.length < str2.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
console.log(scramble("scriptjava", "javascript")); // true
console.log(scramble("scriptingjava", "javascript")); // true
