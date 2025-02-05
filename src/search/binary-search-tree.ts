type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

class BST {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Добавляет новый узел в дерево
  add(value: number): void {
    const newNode: TreeNode = { value, left: null, right: null };

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  // Вспомогательный метод для вставки узла в дерево
  private addNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value === node.value) {
      return; // Значение уже существует
    }

    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  // Удаляет узел с заданным значением
  remove(value: number): void {
    this.root = this.removeNode(this.root, value);
  }

  // Вспомогательный метод для удаления узла из дерева
  private removeNode(node: TreeNode | null, value: number): TreeNode | null {
    if (node === null) {
      return null;
    }

    if (value === node.value) {
      // Узел без детей
      if (node.left === null && node.right === null) {
        return null;
      }

      // Узел с одним ребёнком (правым)
      if (node.left === null) {
        return node.right;
      }

      // Узел с одним ребёнком (левым)
      if (node.right === null) {
        return node.left;
      }

      // Узел с двумя детьми: ищем максимальный узел в левом поддереве
      const maxLeft = this.findMax(node.left);
      node.value = maxLeft.value;
      node.left = this.removeNode(node.left, maxLeft.value);
      return node;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else {
      node.right = this.removeNode(node.right, value);
    }

    return node;
  }

  // Возвращает максимальное значение, начиная с узла node
  private findMax(node: TreeNode): TreeNode {
    let currentNode = node;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  // Поиск узла по значению
  find(value: number): TreeNode | null {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}
