// <T> - позволит типизировать стек
type StackNode<T> = {
  value: T;
  next: StackNode<T> | null;
  prev: StackNode<T> | null;
};

class Stack<T> {
  private size: number;
  private head: StackNode<T> | null;
  private tail: StackNode<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: T): number {
    const node: StackNode<T> = { value, next: null, prev: null };

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

  pop(): StackNode<T> | null {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    const element = this.tail; // Заранее извлекаем элемент из хвоста

    // Если хвост существует и он не явлется головой, т.е. prev !== null
    if (this.tail && this.tail.prev) {
      this.tail = this.tail.prev; // Хвостом становится предыдущий элемент хвоста
      this.tail.next = null; // Теперь у нового хвоста устанавливаем следующим элементом null
    } else {
      // Если элемент был один, но обнуляем хвост и голову, теперь стек пуст
      this.tail = null;
      this.head = null;
    }

    this.size--;
    return element;
  }

  // Возвращает вершину стека (его хвост)
  peek(): StackNode<T> | null {
    return this.tail;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

// Examples
const stack = new Stack<unknown>();

stack.push("hello");
stack.push("world");
stack.push({ a: "a" });

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
