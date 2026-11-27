class DNode {
    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.map = new Map(); // key to node

        // initialise double linked list
        this.left = new DNode(null, null);
        this.right = new DNode(null, null);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    _remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    _insertAtRight(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;

        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this._remove(node);
        this._insertAtRight(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }

        const newNode = new DNode(key, value);
        this._insertAtRight(newNode);
        this.map.set(key, newNode);

        if (this.map.size > this.cap) {
            const leastUse = this.left.next;
            this._remove(leastUse);
            this.map.delete(leastUse.key);
        }
    }
}
