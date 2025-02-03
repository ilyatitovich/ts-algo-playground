/*
Неориентированный граф

Реализуйте неориентированный граф с хранением данных в виде списка смежности с операциями добавления и удаления вершин и рёбер.
Вершины в этом графе — всегда строки.
Граф должен быть простым (не иметь петель и кратных ребер).

Хранить информацию о графе нужно в объекте data,
где ключами являются вершины, а значением, массив смежных вершин.
*/

class Graph {
  private data: Record<string, string[]>;

  constructor() {
    this.data = {};
  }

  // Добавляет вершину, если её нет
  addVertex(vertex: string): void {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }

  // Удаляет вершину и все рёбра, связанные с ней
  removeVertex(vertex: string): void {
    if (!this.data[vertex]) return;

    // Удаляем вершину из списков смежности других вершин
    for (const neighbor of this.data[vertex]) {
      this.data[neighbor] = this.data[neighbor].filter((v) => v !== vertex);
    }

    // Удаляем саму вершину
    delete this.data[vertex];
  }

  // Добавляет грань между двумя вершинами (если обе вершины существуют и грани ещё нет)
  addEdge(vertex1: string, vertex2: string): void {
    if (!this.data[vertex1] || !this.data[vertex2] || vertex1 === vertex2)
      return;

    if (!this.data[vertex1].includes(vertex2)) {
      this.data[vertex1].push(vertex2);
    }

    if (!this.data[vertex2].includes(vertex1)) {
      this.data[vertex2].push(vertex1);
    }
  }

  // Удаляет грань между двумя вершинами
  removeEdge(vertex1: string, vertex2: string): void {
    if (!this.data[vertex1] || !this.data[vertex2]) return;

    this.data[vertex1] = this.data[vertex1].filter((v) => v !== vertex2);
    this.data[vertex2] = this.data[vertex2].filter((v) => v !== vertex1);
  }

  // Возвращает копию списка смежности
  getGraph(): Record<string, string[]> {
    return { ...this.data };
  }
}

const graph = new Graph();

// Добавляем вершины
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Добавляем рёбра
graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log(graph.getGraph());
/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
*/

// Добавляем ещё рёбра
graph.addEdge("B", "C");
graph.addEdge("C", "D");

console.log(graph.getGraph());
/*
{
  A: ['B', 'C'],
  B: ['A', 'C'],
  C: ['A', 'B', 'D'],
  D: ['C']
}
*/

// Удаляем вершину C
graph.removeVertex("C");

console.log(graph.getGraph());
/*
{
  A: ['B'],
  B: ['A'],
  D: []
}
*/

// Удаляем ребро между A и B
graph.removeEdge("A", "B");

console.log(graph.getGraph());
/*
{
  A: [],
  B: [],
  D: []
}
*/
