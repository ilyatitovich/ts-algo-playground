/**
 * Вертикальная ось симметрии

  Дан массив точек с целочисленными координатами (x, y). Определите, существует ли вертикальная прямая, делящая точки на 2 множества, симметричных относительно этой прямой.

  На вход подаётся массив из точек в формате [x, y]: [[0, 0], [1, 1], ...]. Если на вход подали не массив, необходимо вернуть ошибку 'points must be array'.

  Если точек нет, можно считать, что такая прямая есть. То есть функция должна вернуть true, если в качестве аргумента передали пустой массив.

 * @param {([number, number])[]} points
 * @returns {boolean}
 */

function isSym(points: Array<number[]>): boolean {
  if (!Array.isArray(points)) {
    throw new Error("points must be array");
  }

  if (points.length === 0) {
    return true; // Пустой массив считается симметричным
  }

  // Считаем сумму всех X-координат и делим на количество точек для определения оси симметрии
  const sumX = points.reduce((sum, [x]) => sum + x, 0);
  const mid = sumX / points.length; // Среднее арифметическое X

  const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));

  return points.every(([x, y]) => pointSet.has(`${2 * mid - x},${y}`));
}

// Примеры
console.log(
  isSym([
    [1, 2],
    [3, 2],
  ])
); // false (нет симметрии)
console.log(
  isSym([
    [1, 2],
    [3, 2],
    [2, 3],
  ])
); // true (симметрия по x=2)
console.log(
  isSym([
    [0, 0],
    [2, 0],
  ])
); // true (симметрия по x=1)
console.log(
  isSym([
    [0, 0],
    [1, 1],
    [2, 0],
  ])
); // false
console.log(isSym([])); // true (пустой массив считается симметричным)
