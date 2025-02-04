/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

export const high = (str: string): string => {
  // Split the input string into an array of words
  const words = str.split(" ");

  let maxScore = 0; // Stores the highest word score found
  let highestWord = ""; // Stores the word with the highest score

  // Iterate over each word in the string
  for (const word of words) {
    // Calculate the word's score by summing up the alphabet positions of its letters
    const score = [...word].reduce(
      (sum, char) => sum + (char.charCodeAt(0) - 96),
      0
    );

    // If this word has a higher score than the current max, update maxScore and highestWord
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  // Return the word with the highest score
  return highestWord;
};
