class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let returnVal = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return returnVal;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        returnVal.prev = null;
        return returnVal;
    }

    shift() {
        if (this.length === 0) return undefined;
        let returnVal = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return returnVal;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        returnVal.next = null;
        return returnVal;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let curnNode = null;
        if ((this.length - 1) > 2 * index) {
            curnNode = this.head;
            let i = 0;
            while (i !== index) {
                curnNode = curnNode.next;
                i++;
            }
        } else {
            curnNode = this.tail;
            let i = this.length - 1;
            while (i !== index) {
                curnNode = curnNode.prev;
                i--;
            }
        }

        return curnNode;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        let nextNode = removed.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        removed.next = null;
        removed.prev = null;

        this.length--;
        return removed;
    }

    reverse() {
        let curnNode = this.head;
        for (let i = 0; i < this.length; i++) {
            [curnNode.next, curnNode.prev] = [curnNode.prev, curnNode.next];
            curnNode = curnNode.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }
}

module.exports = DoublyLinkList;

// var list = new DoublyLinkList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);