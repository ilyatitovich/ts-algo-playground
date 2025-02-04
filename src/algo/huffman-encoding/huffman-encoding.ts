function huffman(str: string): {
  codes: Record<string, string>;
  encodedStr: string;
} {
  // Высчитать частоту повторения каждого символа
  const rates: Record<string, number> = getRates(str);

  // Создать очередь с приоритетом, наполненную нодами для каждого символа
  const queue = buildQueue(rates);

  while (queue.size > 1) {
    // Взять два элемента из очереди
    const [rightNode, rightPriority] = queue.pop()!;
    const [leftNode, leftPriority] = queue.pop()!;

    // Создать новый узел дерева, посчитать его приоритет и положить в очередь
    const newNode: HuffmanNode = {
      value: null,
      left: leftNode,
      right: rightNode,
    };
    const newPriority = rightPriority + leftPriority;
    queue.push(newNode, newPriority);
  }

  // Последняя оставшаяся нода будет корнем дерева
  const [rootNode] = queue.pop()!;
  // Строим хеш-таблицу с кодом для каждого символа
  const codes: Record<string, string> = getCodes(rootNode);
  // Кодируем строку
  const encodedStr: string = getEncodedStr(str, codes);

  return { codes, encodedStr };
}

// Определение структуры узла дерева Хаффмана
type HuffmanNode = {
  value: string | null;
  left: HuffmanNode | null;
  right: HuffmanNode | null;
};

// Считает частоту повторения каждого символа
function getRates(str: string): Record<string, number> {
  const rates: Record<string, number> = {};

  for (const char of str) {
    rates[char] = (rates[char] || 0) + 1;
  }

  return rates;
}

// Создаёт очередь с приоритетом, наполненную нодами для каждого символа
function buildQueue(rates: Record<string, number>): PriorityQueue<HuffmanNode> {
  const queue = new PriorityQueue<HuffmanNode>();

  for (const char in rates) {
    queue.push({ value: char, left: null, right: null }, rates[char]);
  }

  return queue;
}

// Строит хеш-таблицу с кодом для каждого символа, рекурсивно обходя дерево
function getCodes(
  node: HuffmanNode,
  codes: Record<string, string> = {},
  code: string = ""
): Record<string, string> {
  if (!node.left && !node.right && node.value !== null) {
    codes[node.value] = code;
  } else {
    if (node.left) getCodes(node.left, codes, code + "0");
    if (node.right) getCodes(node.right, codes, code + "1");
  }

  return codes;
}

// Кодирует строку по таблице кодов и возвращает результат
function getEncodedStr(str: string, codes: Record<string, string>): string {
  return str
    .split("")
    .map((char) => codes[char])
    .join("");
}

// Обобщённый класс очереди с приоритетом
class PriorityQueue<T> {
  private nodes: T[] = [];
  private priority: Map<T, number> = new Map();

  push(node: T, priority: number): void {
    if (!this.priority.has(node)) {
      this.nodes.push(node);
    }

    this.priority.set(node, priority);
    this.nodes.sort((a, b) => this.priority.get(b)! - this.priority.get(a)!);
  }

  pop(): [T, number] | undefined {
    if (!this.nodes.length) return undefined;

    const node = this.nodes.pop()!;
    const priority = this.priority.get(node)!;

    return [node, priority];
  }

  get size(): number {
    return this.nodes.length;
  }
}

// Пример использования
const input = "hello world";
const { codes, encodedStr } = huffman(input);

console.log("Коды Хаффмана:", codes);
console.log("Закодированная строка:", encodedStr);
