// Time Complexity
// Insertion: O(log(n))
// Removal: O(log(n))
// Search: O(n)

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        let idx = this.values.push(val) - 1;
        while (idx > 0) {
            let parent = this.parent(idx);
            if (this.values[idx] <= parent.val) return this.values;
            this.swap(idx, parent.index);
            idx = parent.index;
        }
        return this.values;
    }

    extract() {
        if (this.values.length === 0) return undefined;
        let idx = 0;
        this.swap(idx, this.values.length - 1);
        let ret = this.values.pop();

        while (true) {
            let leftChild = this.leftChild(idx);
            let rightChild = this.rightChild(idx);
            let winChild = undefined;
            if (rightChild) {
                winChild = leftChild.val > rightChild.val ? leftChild : rightChild;
            } else if (leftChild) {
                winChild = leftChild;
            }
            if (!winChild || this.values[idx] > winChild.val) return ret;
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

module.exports = MaxBinaryHeap;

// var heap = new MaxBinaryHeap();
// heap.insert(5);
// heap.insert(10);
// heap.insert(15);
// heap.insert(8);
// heap.insert(6);
// heap.insert(20);
// heap.insert(7);
// //        20
// //   8         15
// // 5   6    10     7