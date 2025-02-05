/*
Алгоритм поиска в глубину depth-first search (pre-order)

Как работает алгоритм:

1. Проверяем текущий узел: если его значение равно искомому, возвращаем узел.

2. Рекурсивно обходим дочерние узлы в порядке pre-order (сначала обрабатываем узел, затем идём вглубь по его детям).

3. Если в каком-то поддереве нашли искомый узел, останавливаем поиск и возвращаем результат.

4. Если не нашли, возвращаем undefined.

Этот алгоритм полезен, когда структура дерева нерегулярная, и важно сначала обработать родительские узлы перед их потомками.
*/

type TreeNode = {
  value: number;
  children: TreeNode[];
};

function DFS(node: TreeNode, value: number): TreeNode | undefined {
  if (node.value === value) {
    return node; // Если нашли нужное значение, возвращаем узел
  }

  for (const child of node.children) {
    const result = DFS(child, value); // Рекурсивно ищем в дочерних узлах
    if (result) {
      return result; // Если нашли, прерываем поиск
    }
  }

  return undefined; // Если значение не найдено
}

// Пример использования
const tree: TreeNode = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 5, children: [] }] },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] },
      ],
    },
    { value: 4, children: [] },
  ],
};

console.log(DFS(tree, 6)); // Найдёт и вернёт узел { value: 6, children: [] }
console.log(DFS(tree, 10)); // undefined (значение не найдено)
