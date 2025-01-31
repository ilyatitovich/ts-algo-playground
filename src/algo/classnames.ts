/*
classnames

Напишите утилиту для объединения имён классов. Функция должна обрабатывать:
- объекты,
- строки,
- числа, но не 0,
- массивы любой вложенности.
*/

function classNames(...args: any[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return; // Пропускаем falsy значения: null, undefined, false, 0, ''

    switch (typeof arg) {
      case "string":
      case "number":
        // Добавляем строки и числа (кроме 0)
        classes.push(arg.toString());
        break;

      case "object":
        if (Array.isArray(arg)) {
          // Рекурсивно обрабатываем массивы
          const inner = classNames(...arg);
          if (inner) {
            classes.push(inner);
          }
        } else {
          // Обрабатываем объекты
          for (const key in arg) {
            if (arg.hasOwnProperty(key) && arg[key]) {
              classes.push(key);
            }
          }
        }
        break;
    }
  });

  return classes.join(" ");
}

export default classNames;

/*
Объяснение:

1. Обработка аргументов:
  - Функция принимает любое количество аргументов (...args).
  - Мы проходим по каждому аргументу и обрабатываем его в зависимости от типа.

2. Обработка строк и чисел:
  - Если аргумент — строка или число (кроме 0), он добавляется в результирующий массив classes.

3. Обработка объектов:
  - Если аргумент — объект, мы проверяем его свойства. Если значение свойства true, ключ добавляется в classes.

4. Обработка массивов:
  - Если аргумент — массив, мы рекурсивно вызываем classNames для его элементов и добавляем результат в classes.

5. Игнорирование falsy значений:
  - Значения null, undefined, false, 0 и пустая строка '' игнорируются.

6. Объединение результата:
  - В конце мы объединяем все элементы массива classes в строку, разделенную пробелами.
*/
