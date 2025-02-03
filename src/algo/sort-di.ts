/*

Перестановка по DI

Дана строка str произвольной длины N, в которой существует только два символа:
I (increase),
D (decrease).

Необходимо реализовать такую перестановку A, чтобы для всех i=[0, 1, ..., N - 1] были верны следующие правила:

Если S[i] === 'I' ⇒ A[i] < A[i+1];
Если S[i] === 'D' ⇒ A[i] > A[i+1].

Сложность алгоритма по времени — O(n).
*/

function match(str: string) {
  const len = str.length;
  const result = [];
  const stack = [];

  // Проходим по строке
  for (let i = 0; i <= len; i++) {
    // Добавляем в стек число i
    stack.push(i);

    // Если на позиции i встречаем 'I' или конец строки
    // (в случае конца строки также нужно извлечь элементы из стека)
    if (i === len || str[i] === "I") {
      // Извлекаем элементы из стека в результат
      while (stack.length) {
        result.push(stack.pop());
      }
    }
  }

  return result;
}

console.log(match("III")); // [0, 1, 2, 3]
console.log(match("DDI")); // [3, 2, 0, 1]
console.log(match("IDID")); // [0, 4, 1, 3, 2]
