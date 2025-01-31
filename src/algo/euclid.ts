/**
 * Находит НОД для двух чисел, используя алгоритм Евклида
 * @param {number} a
 * @param {number} b
 * @returns {number} НОД двух чисел
 */
const euclidForTwo = (a: number, b: number): number => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
};

/**
 * Находит НОД для любого количества натуральных чисел
 * @param {number[]} args - числа для проверки
 * @returns {number} НОД или '-1' в случае некорректных данных
 */
const euclid = (...args: number[]): number => {
  if (args.length === 0 || args.some((n) => !Number.isInteger(n) || n <= 0)) {
    return -1; // Некорректные данные
  }

  return args.reduce((gcd, num) => euclidForTwo(gcd, num));
};

export default euclid;
