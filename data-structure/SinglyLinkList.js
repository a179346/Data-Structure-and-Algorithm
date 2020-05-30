// Time Complexity
// Insertion( to the beginning or the end): O(1)
// Removal ( the beginning ): O(1) 
// Removal (the end) :O(n)
// Searching: O(n)
// Accessing: O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.head === null) return undefined;
        let returnVal = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        }
        let curnNode = this.head;
        while (curnNode.next !== this.tail) {
            curnNode = curnNode.next;
        }
        curnNode.next = null;
        this.tail = curnNode;
        this.length--;
        return returnVal;
    }

    shift() {
        if (this.head === null) return undefined;
        let returnVal = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return returnVal;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let curnNode = this.head;
        let i = 0;
        while (i !== index) {
            curnNode = curnNode.next;
            i++;
        }
        return curnNode;
    }

    set(index, val) {
        let node = this.get(index);
        if (node !== null) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(val);
            return true;
        } else if (index === this.length) {
            this.push(val);
            return true;
        }

        let newNode = new Node(val);
        let leftNode = this.get(index - 1);
        let rightNode = leftNode.next;

        leftNode.next = newNode;
        newNode.next = rightNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        }

        let leftNode = this.get(index - 1);
        let removeNode = leftNode.next;
        leftNode.next = removeNode.next;
        this.length--;
        return removeNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

module.exports = SinglyLinkList;

// var list = new SinglyLinkList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);