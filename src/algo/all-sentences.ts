/* Перебор сочетаний строк

Дан список слов. Каждое слово представлено массивом возможных вариантов нормализации.

Напишите функцию, которая принимает список слов и возвращает функцию, которая при каждом вызове возвращает строку — одно из возможных сочетаний вариантов слова в предложении. Пока не вернёт все возможные варианты. Если все возможные варианты закончились, нужно вернуть undefined.
Важно: не используйте итераторы и рекурсию.
*/

// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

function allSentences(words: Array<string[]>) {
  const indices = new Array(words.length).fill(0);
  let finished = false;

  // Используем замыкание
  return function nextSentence() {
    if (finished) {
      return undefined;
    }

    const sentence = words
      .map((wordForms, i) => wordForms[indices[i]])
      .join(" ");

    // Обновляем индексы для следующей комбинации
    for (let i = words.length - 1; i >= 0; i--) {
      if (indices[i] < words[i].length - 1) {
        indices[i]++;
        break;
      } else {
        indices[i] = 0;
        if (i === 0) finished = true;
      }
    }

    return sentence;
  };
}

// Примеры
const nextSentence = allSentences([
  ["внучка", "внучок"],
  ["маша", "махать", "машу"],
]);

console.log(nextSentence()); // 'внучка маша'
console.log(nextSentence()); // 'внучка махать'
console.log(nextSentence()); // 'внучка машу'
console.log(nextSentence()); // 'внучок маша'
console.log(nextSentence()); // 'внучок махать'
console.log(nextSentence()); // 'внучок машу'
console.log(nextSentence()); // undefined
