type Node = {
  value: any;
  next: Node | null;
  prev: Node | null;
};

export class DoublyLinkedList<T> {
  private size: number;
  private head: Node | null;
  private tail: Node | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Добавить элемент в список по индексу (или в конец, если индекс не задан)
  add(value: T, index?: number): void {
    const node: Node = { value, prev: null, next: null };

    if (index === undefined) {
      // Добавление в конец списка
      if (this.tail) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        // Если список пустой, инициализируем head и tail
        this.head = node;
        this.tail = node;
      }
    } else {
      // Добавление по индексу
      const nodeAtIndex = this.searchByIndex(index);

      node.next = nodeAtIndex;
      node.prev = nodeAtIndex.prev;

      if (nodeAtIndex.prev) {
        nodeAtIndex.prev.next = node;
      }

      nodeAtIndex.prev = node;

      if (nodeAtIndex === this.head) {
        // Если вставка происходит в начало
        this.head = node;
      }
    }

    this.size++;
  }

  // Удалить элемент по значению
  removeByValue(value: any): void {
    const node = this.searchByValue(value);

    if (!node) {
      return;
    }

    this._removeNode(node);
  }

  // Удалить элемент по индексу
  removeByIndex(index: number): void {
    this._removeNode(this.searchByIndex(index));
  }

  // Найти узел по индексу
  searchByIndex(index: number): Node {
    this._checkIndex(index);

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node!.next;
    }

    return node!;
  }

  // Найти узел по значению, начиная с индекса
  searchByValue(value: any, startIndex: number = 0): Node | null {
    let node = startIndex ? this.searchByIndex(startIndex) : this.head;

    while (node && node.value !== value) {
      node = node.next;
    }

    return node;
  }

  // Проверка, что индекс находится в допустимом диапазоне
  private _checkIndex(index: number): void {
    if (index >= this.size || index < 0) {
      throw new Error("Индекс за пределами списка");
    }
  }

  // Удаление узла
  private _removeNode(node: Node): void {
    const prevNode = node.prev;
    const nextNode = node.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    node.prev = null;
    node.next = null;

    if (node === this.head) {
      this.head = nextNode;
    }

    if (node === this.tail) {
      this.tail = prevNode;
    }

    this.size--;
  }
}
