/*
Ёлочка из звезд

Напишите функцию tree, которая возвращает ASCII-ёлочку высотой
N символов из «*» и «|». Если на вход функции передали не число и не строку,
нужно выбросить ошибку TYPE_ERROR. Уровень ёлочки строго от трёх.
Если уровень меньше трёх, вернуть null.
*/

type Nullable<T> = T | null;

const TYPE_ERROR = "Something wrong with type of input param";

const tree = (lvl: number | string): Nullable<string> => {
  // Проверяем тип входного значения
  if (typeof lvl !== "number" && typeof lvl !== "string") {
    throw new TypeError(TYPE_ERROR);
  }

  // Преобразуем строку в число, если нужно
  const level = typeof lvl === "string" ? parseInt(lvl, 10) : lvl;

  // Если уровень некорректный или меньше 3, возвращаем null
  if (isNaN(level) || level < 3) {
    return null;
  }

  const treeMatrix: string[][] = [];

  // Формируем "листву" ёлочки
  for (let i = 0; i < level - 1; i++) {
    const row = new Array(2 * level - 1).fill(" "); // Строка заполняется пробелами
    const start = level - 1 - i; // Начало звёздочек
    const end = level - 1 + i; // Конец звёздочек
    for (let j = start; j <= end; j++) {
      row[j] = "*";
    }
    treeMatrix.push(row);
  }

  // Добавляем ствол ёлочки
  const trunkRow = new Array(2 * level - 1).fill(" ");
  trunkRow[level - 1] = "|";
  treeMatrix.push(trunkRow);

  // Преобразуем матрицу в строку
  return treeMatrix.map((row) => row.join("")).join("\n");
};

export default tree;

console.log(tree(5));
