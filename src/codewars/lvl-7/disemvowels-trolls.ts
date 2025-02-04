// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str: string): string {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(disemvowel("This website is for losers LOL!"));
