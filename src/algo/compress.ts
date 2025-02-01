/*
Свёртка в диапазоны

Дан список переменных типа Number. Повторяющихся элементов в нём нет.

- Преобразуйте это множество в строку, сворачивая соседние
  по числовому ряду числа в диапазоны.
- Если был передан пустой массив, необходимо вернуть строку "undefined".

*/

function compress(list: number[]): string {
  if (list.length === 0) {
    return "undefined";
  }

  list.sort((a, b) => a - b); // Сортируем массив чисел по возрастанию

  const result: string[] = [];
  let start: number = list[0];
  let end: number = start;

  for (let i = 1; i < list.length; i++) {
    if (list[i] === end + 1) {
      // Если текущее число является продолжением диапазона
      end = list[i];
    } else {
      // Добавляем диапазон или одиночное число
      result.push(start === end ? `${start}` : `${start}-${end}`);
      start = list[i];
      end = start;
    }
  }

  // Добавляем последний диапазон
  result.push(start === end ? `${start}` : `${start}-${end}`);

  return result.join(",");
}

// Примеры использования
console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])); // '1-4'
console.log(compress([1, 4])); // '1,4'
console.log(compress([])); // 'undefined'
console.log(compress([10, 11, 12, 15, 16, 20])); // '10-12,15-16,20'
