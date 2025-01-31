function quickSort<T>(arr: T[], start = 0, end = arr.length - 1) {
  if (start >= end) return arr; // Базовый случай рекурсии

  const pivotIndex = partition<T>(arr, start, end); // Разбиение массива

  quickSort(arr, start, pivotIndex - 1); // Сортируем левую часть
  quickSort(arr, pivotIndex + 1, end); // Сортируем правую часть

  return arr;
}

function partition<T>(
  arr: T[],
  start: number = 0,
  end: number = arr.length - 1
) {
  const pivotValue = arr[end]; // Опорный элемент — последний
  let pivotIndex = start; // Начинаем отсюда перемещать элементы

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Если элемент меньше опорного
      swap(arr, i, pivotIndex); // Меняем местами с элементом в pivotIndex
      pivotIndex++; // Сдвигаем индекс вправо
    }
  }

  swap<T>(arr, pivotIndex, end); // Меняем опорный элемент с элементом на pivotIndex

  return pivotIndex;
}

// Переставляет элементы местами
function swap<T>(arr: T[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// Пример
const arr = [3, 8, 2, 5, 1, 4, 7, 6];

console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
