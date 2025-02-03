/*
Это стандартная реализация бинарной кучи.
Можно сделать кучу минимальной (isMinHeap = true)
или максимальной (isMinHeap = false).
*/

class BinaryHeap {
  private data: number[];

  constructor() {
    this.data = [];
  }

  // Вставка элемента в кучу
  insert(value: number): void {
    this.data.push(value); // Добавляем в конец массива
    this.bubbleUp(this.data.length - 1); // Восстанавливаем свойство кучи
  }

  // Извлечение корневого элемента (максимального или минимального)
  extract(): number | undefined {
    if (this.data.length === 0) {
      return undefined;
    }

    if (this.data.length === 1) {
      return this.data.pop();
    }

    const root = this.data[0]; // Запоминаем корень
    this.data[0] = this.data.pop()!; // Заменяем корень последним элементом
    this.sinkDown(0); // Восстанавливаем порядок в куче

    return root;
  }

  // Всплытие элемента вверх по куче
  private bubbleUp(index: number): void {
    const value = this.data[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.data[parentIndex];

      if (value <= parentValue) {
        break; // Если порядок не нарушен, останавливаемся
      }

      this.data[index] = parentValue;
      this.data[parentIndex] = value;
      index = parentIndex;
    }
  }

  // Просеивание вниз (восстановление свойства кучи)
  private sinkDown(index: number): void {
    const length = this.data.length;
    const value = this.data[index];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let largestIdx = index;

      if (
        leftChildIdx < length &&
        this.data[leftChildIdx] > this.data[largestIdx]
      ) {
        largestIdx = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        this.data[rightChildIdx] > this.data[largestIdx]
      ) {
        largestIdx = rightChildIdx;
      }

      if (largestIdx === index) {
        break;
      }

      this.data[index] = this.data[largestIdx];
      this.data[largestIdx] = value;
      index = largestIdx;
    }
  }

  // Получение текущего состояния кучи
  getHeap(): number[] {
    return [...this.data];
  }
}

// Примеры
const heap = new BinaryHeap();

// Добавляем элементы
heap.insert(10);
heap.insert(15);
heap.insert(20);
heap.insert(17);

console.log(heap.getHeap()); // [20, 17, 15, 10]

// Удаляем корневой элемент (максимальный)
console.log(heap.extract()); // 20
console.log(heap.getHeap()); // [17, 10, 15]

heap.insert(25);
console.log(heap.getHeap()); // [25, 17, 15, 10]

console.log(heap.extract()); // 25
console.log(heap.getHeap()); // [17, 10, 15]

/*
Разбор кода:

Хранение данных:
- Используем массив data для хранения элементов.
- Вставка элемента (insert):
- Добавляем элемент в конец массива.
- "Всплываем" (bubbleUp) элемент, чтобы восстановить свойство кучи.
- Извлечение корня (extract):
- Если элементов нет, возвращаем undefined.
- Если один элемент – просто удаляем и возвращаем его.
- Меняем корневой элемент на последний, затем "просеиваем вниз" (sinkDown).

Всплытие (bubbleUp):
- Поднимаем элемент вверх, если он нарушает порядок относительно родителя.

Просеивание вниз (sinkDown):
- Спускаем корневой элемент вниз, сравнивая его с дочерними узлами.
*/
