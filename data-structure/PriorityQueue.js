class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    let idx = this.values.push(newNode) - 1;
    while (idx > 0) {
      let parent = this.parent(idx);
      if (this.values[idx].priority > parent.val.priority) return this.values;
      this.swap(idx, parent.index);
      idx = parent.index;
    }
    return this.values;
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    let idx = 0;
    this.swap(idx, this.values.length - 1);
    let ret = this.values.pop();

    while (true) {
      let leftChild = this.leftChild(idx);
      let rightChild = this.rightChild(idx);
      let winChild = undefined;
      if (rightChild) {
        winChild = leftChild.val.priority <= rightChild.val.priority ? leftChild : rightChild;
      } else if (leftChild) {
        winChild = leftChild;
      }
      if (!winChild || this.values[idx].priority < winChild.val.priority) return ret;
      this.swap(idx, winChild.index);
      idx = winChild.index;
    }
    return ret;
  }

  leftChild(idx) {
    let retIdx = 2 * idx + 1;
    return (retIdx <= this.values.length - 1) ? { index: retIdx, val: this.values[retIdx] } : undefined;
  }

  rightChild(idx) {
    let retIdx = 2 * idx + 2;
    return (retIdx <= this.values.length - 1) ? { index: retIdx, val: this.values[retIdx] } : undefined;
  }

  parent(idx) {
    if (idx === 0) return undefined;
    let retIdx = Math.floor((idx - 1) / 2);
    return { index: retIdx, val: this.values[retIdx] };
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
  }
}

module.exports = PriorityQueue;