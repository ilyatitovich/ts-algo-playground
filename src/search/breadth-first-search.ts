// Алгоритм поиска в ширину breadth-first search

type TreeNode = {
  value: number;
  children: TreeNode[];
};

function BFS(root: TreeNode, value: number): TreeNode | undefined {
  const queue: TreeNode[] = [root]; // Очередь для обхода

  while (queue.length > 0) {
    const node = queue.shift(); // Извлекаем первый элемент

    if (node?.value === value) {
      return node; // Найдено искомое значение
    }

    if (node) {
      queue.push(...node.children); // Добавляем всех детей в очередь
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

console.log(BFS(tree, 6)); // Найдёт и вернёт узел { value: 6, children: [] }
console.log(BFS(tree, 10)); // undefined (значение не найдено)
