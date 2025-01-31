function mergeSort<T>(
  arr: T[],
  start = 0,
  end = arr.length - 1,
  buffer?: T[]
): T[] {
  if (start >= end) return arr; // Базовый случай: если остался один элемент, завершаем рекурсию

  if (!buffer) buffer = [...arr]; // Создаём буферный массив при первом вызове

  const mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid, buffer);
  mergeSort(arr, mid + 1, end, buffer);
  merge(arr, buffer, start, mid, end);

  return arr;
}

function merge<T>(
  arr: T[],
  buffer: T[],
  start: number,
  mid: number,
  end: number
) {
  // 1. Копируем элементы текущего диапазона в буферный массив
  for (let i = start; i <= end; i++) {
    buffer[i] = arr[i];
  }

  let l = start; // Указатель на начало первой половины
  let r = mid + 1; // Указатель на начало второй половины
  let i = start; // Индекс в основном массиве

  // 2. Слияние двух отсортированных частей
  while (l < mid + 1 && r < end + 1) {
    if (buffer[l] <= buffer[r]) {
      arr[i] = buffer[l]; // Берем элемент из левой части
      l++;
    } else {
      arr[i] = buffer[r]; // Берем элемент из правой части
      r++;
    }
    i++;
  }

  // 3. Если остались элементы в левой половине — добавляем их
  while (l < mid + 1) {
    arr[i] = buffer[l];
    l++;
    i++;
  }

  // 4. Если остались элементы в правой половине — добавляем их
  while (r < end + 1) {
    arr[i] = buffer[r];
    r++;
    i++;
  }
}

// Пример использования
const arr = [3, 8, 2, 5, 1, 4, 7, 6];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
