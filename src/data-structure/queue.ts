type QueueNode<T> = {
  value: T;
  next: QueueNode<T> | null;
  prev: QueueNode<T> | null;
};

class Queue<T> {
  private size: number;
  private head: QueueNode<T> | null;
  private tail: QueueNode<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Добавляет элемент в очередь
  enqueue(value: T): number {
    const node: QueueNode<T> = { value, next: null, prev: null };

    // Если стек не пустой (у него есть последний елемент - хвост)
    if (this.tail) {
      node.prev = this.tail; // Указываем на этот хвост у нового элемента
      this.tail.next = node; // Добавляем новый элемент в предыдщуий

      this.tail = node; // Новый элемент становится хвостом
    } else {
      // Если стек пуст элемент становится головой и хвостом одновременно
      this.head = node;
      this.tail = node;
    }

    this.size++;
    return this.size;
  }

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue(): QueueNode<T> | null {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const element = this.head;

    if (this.head && this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.size--;

    return element;
  }

  // Возвращает элемент в начале очереди.
  peek(): QueueNode<T> | null {
    return this.head;
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty(): boolean {
    return this.size === 0;
  }
}
