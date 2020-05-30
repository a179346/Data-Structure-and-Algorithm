class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, end) {
    const visited = {};
    const prev = {}; prev[start] = null;
    const dist = {}; dist[start] = 0;
    const q = new PriorityQueue();
    q.enqueue(start, 0);

    while (true) {
      let currentNode = q.dequeue().val;
      if (!currentNode || currentNode === end) break;
      visited[currentNode] = true;

      this.adjacencyList[currentNode].forEach(vertex => {
        if (visited[vertex.node]) return;
        let newDist = dist[currentNode] + vertex.weight;
        if (!dist[vertex.node] || (newDist < dist[vertex.node])) {
          dist[vertex.node] = newDist;
          prev[vertex.node] = currentNode;
          q.enqueue(vertex.node, newDist);
        }
      });
    }
    return { visited, prev, dist };
  }
}

module.exports = WeightedGraph;

// var g = new WeightedGraph();

// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A", "B", 4);
// g.addEdge("A", "C", 2);
// g.addEdge("B", "E", 3);
// g.addEdge("C", "D", 2);
// g.addEdge("C", "F", 4);
// g.addEdge("D", "E", 3);
// g.addEdge("D", "F", 1);
// g.addEdge("E", "F", 1);
