// Узел бинарного дерева
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Бинарное дерево поиска
class BinarySearchTree {
  private root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Добавление нового элемента
  insert(value: number): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode; // Если дерево пустое, новый узел становится корнем
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Рекурсивное добавление узла
  private insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode; // Добавляем узел слева
      } else {
        this.insertNode(node.left, newNode); // Продолжаем поиск места рекурсивно
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // Добавляем узел справа
      } else {
        this.insertNode(node.right, newNode); // Продолжаем поиск места рекурсивно
      }
    }
  }

  // Поиск элемента
  search(value: number): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode | null, value: number): boolean {
    if (node === null) return false; // Если дошли до пустого места — элемента нет

    if (value === node.value) return true; // Найден нужный элемент
    if (value < node.value) return this.searchNode(node.left, value); // Ищем в левом поддереве
    return this.searchNode(node.right, value); // Ищем в правом поддереве
  }

  // Удаление узла
  remove(value: number): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode | null, value: number): TreeNode | null {
    if (node === null) return null; // Элемент не найден

    if (value < node.value) {
      node.left = this.removeNode(node.left, value); // Ищем в левом поддереве
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value); // Ищем в правом поддереве
      return node;
    } else {
      // Узел найден, выполняем удаление
      if (node.left === null) return node.right; // Нет левого поддерева
      if (node.right === null) return node.left; // Нет правого поддерева

      // Узел имеет два потомка — ищем минимальный в правом поддереве
      const minRight = this.findMin(node.right);
      node.value = minRight.value;
      node.right = this.removeNode(node.right, minRight.value);
      return node;
    }
  }

  // Нахождение минимального значения (самого левого узла)
  private findMin(node: TreeNode): TreeNode {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Обход в порядке (LNR) - левый, текущий, правый (in-order traversal)
  inorder(): number[] {
    const result: number[] = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  private inorderTraversal(node: TreeNode | null, result: number[]): void {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
  }
}

// Примеры

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Обход in-order:", bst.inorder());
// Ожидаемый результат: [20, 30, 40, 50, 60, 70, 80]

console.log("Поиск 40:", bst.search(40)); // true
console.log("Поиск 100:", bst.search(100)); // false

bst.remove(50);
console.log("Обход после удаления 50:", bst.inorder());
// Ожидаемый результат: [20, 30, 40, 60, 70, 80]
