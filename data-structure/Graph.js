class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1);
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex][0]) {
            this.removeEdge(vertex, this.adjacencyList[vertex][0]);
        }
        delete this.adjacencyList[vertex];
    }

    // DEPTH FIRST SEARCH
    DFS_recursively(start) {
        let visited = {};
        let results = [];

        function helper(vertex) {
            if (!vertex) return;
            results.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(v => {
                if (!visited[v]) {
                    helper.call(this, v);
                }
            });
        }

        helper.call(this, start);
        return results;
    }

    DFS_iteratively(start) {
        const q = [start];
        const results = [];
        const visited = {};
        visited[start] = true;

        while (q.length > 0) {
            const vertex = q.pop();
            results.push(vertex);
            this.adjacencyList[vertex].forEach(v => {
                if (!visited[v]) {
                    visited[v] = true;
                    q.push(v);
                }
            });
        }
        return results;
    }

    // BREADTH FIRST SEARCH
    BFS_iteratively(start) {
        const q = [start];
        const results = [];
        const visited = {};
        visited[start] = true;

        while (q.length > 0) {
            const vertex = q.shift();
            results.push(vertex);
            this.adjacencyList[vertex].forEach(v => {
                if (!visited[v]) {
                    visited[v] = true;
                    q.push(v);
                }
            });
        }
        return results;
    }
}

module.exports = Graph;
// var g = new Graph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");
// g.addEdge("A","B");
// g.addEdge("A","C")
// g.addEdge("B","D");
// g.addEdge("C","E")
// g.addEdge("D","E");
// g.addEdge("D","F")
// g.addEdge("E","F");
// //      A
// //    /   \  
// // B       C
// // |       |
// // D ----- E
// //  \    /
// //    F