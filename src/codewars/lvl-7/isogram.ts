/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/typescript

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str: string): boolean {
  const letters: Record<string, string> = {};

  str = str.toLocaleLowerCase();

  for (let i = 0; i <= str.length; i++) {
    const letter = str[i];

    if (letters[letter]) {
      return false;
    }

    letters[letter] = letter;
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));
