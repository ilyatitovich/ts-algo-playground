// Элемент очереди с приоритетом
class PriorityQueueNode<T> {
  value: T;
  priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

// Очередь с приоритетом на основе двоичной кучи (мин-куча)
class PriorityQueue<T> {
  private heap: PriorityQueueNode<T>[] = [];

  // Вставка элемента с приоритетом
  enqueue(value: T, priority: number): void {
    const newNode = new PriorityQueueNode(value, priority);
    this.heap.push(newNode);
    this.bubbleUp();
  }

  // Удаление элемента с наивысшим приоритетом (минимальный приоритет)
  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop()?.value;

    const min = this.heap[0].value;
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);
    return min;
  }

  // Получение элемента с наивысшим приоритетом (без удаления)
  peek(): T | undefined {
    return this.heap.length > 0 ? this.heap[0].value : undefined;
  }

  // Количество элементов в очереди
  size(): number {
    return this.heap.length;
  }

  // Проверка, пуста ли очередь
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Всплытие узла вверх (балансировка кучи)
  private bubbleUp(): void {
    let index = this.heap.length - 1;
    const node = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (node.priority >= parent.priority) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = node;
      index = parentIndex;
    }
  }

  // Просеивание узла вниз (балансировка кучи)
  private sinkDown(index: number): void {
    const length = this.heap.length;
    const node = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].priority < this.heap[smallest].priority
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].priority < this.heap[smallest].priority
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = node;
      index = smallest;
    }
  }
}

// Пример
const pq = new PriorityQueue<string>();

pq.enqueue("Учить TypeScript", 2);
pq.enqueue("Сделать проект", 1);
pq.enqueue("Прочитать книгу", 3);

console.log("Размер очереди:", pq.size()); // 3
console.log("Первый элемент:", pq.peek()); // "Сделать проект"

console.log("Извлечён:", pq.dequeue()); // "Сделать проект"
console.log("Извлечён:", pq.dequeue()); // "Учить TypeScript"
console.log("Извлечён:", pq.dequeue()); // "Прочитать книгу"
console.log("Очередь пуста?", pq.isEmpty()); // true
