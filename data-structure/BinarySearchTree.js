class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let curnNode = this.root;
    while (true) {
      if (val === curnNode.val) return undefined;
      if (val > curnNode.val) {
        if (curnNode.right === null) {
          curnNode.right = newNode;
          return this;
        }
        curnNode = curnNode.right;
      } else {
        if (curnNode.left === null) {
          curnNode.left = newNode;
          return this;
        }
        curnNode = curnNode.left;
      }
    }
  }

  find(val) {
    let curnNode = this.root;
    while (curnNode !== null) {
      if (val === curnNode.val) return true;
      if (val > curnNode.val) {
        curnNode = curnNode.right;
      } else {
        curnNode = curnNode.left;
      }
    }
    return false;
  }

  // TRAVERSAL-----------------------------------------
  // BREADTH FIRST TRAVERSAL
  BFS() {
    let q = [this.root];
    let visited = [];
    let node = null;
    while ((node = q.shift())) {
      visited.push(node.val);
      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
    }
    return visited;
  }

  // DEPTH FIRST TRAVERSAL
  DFS_PreOrder() {
    let arr = [];

    function helper(node) {
      if (node === null) return;
      arr.push(node.val);
      helper(node.left);
      helper(node.right);
    }

    helper(this.root);
    return arr;
  }

  DFS_PostOrder() {
    let arr = [];

    function helper(node) {
      if (node === null) return;
      helper(node.left);
      helper(node.right);
      arr.push(node.val);
    }

    helper(this.root);
    return arr;
  }

  DFS_InOrder() {
    let arr = [];

    function helper(node) {
      if (node === null) return;
      helper(node.left);
      arr.push(node.val);
      helper(node.right);
    }

    helper(this.root);
    return arr;
  }
}

module.exports = BinarySearchTree;

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(7);
// tree.insert(2);
// tree.insert(13);
// tree.insert(11);
// tree.insert(15);
// //       10
// //   5      13
// // 2   7  11   15