/*
Run-Length Encoding (RLE)
Алгоритм сжатия строк, который заменяет повторяющиеся символы их количеством.
*/

function rle(str: string): string {
  if (!/^[A-Z]*$/.test(str)) {
    throw new Error(`Given string ${str} contains invalid characters`);
  }

  return str.replace(
    /(.)\1*/g,
    (group) => group[0] + (group.length > 1 ? group.length : "")
  );
}

// Пример использования:
console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
// "A4B3C2XYZD4E3F3A6B28"

// Вариант без использования регулярных выражений
function rleFor(str: string): string {
  if (!/^[A-Z]*$/.test(str)) {
    throw new Error(`Given string ${str} contains invalid characters`);
  }

  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }

  return result;
}

console.log(rleFor("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
// "A4B3C2XYZD4E3F3A6B28"
