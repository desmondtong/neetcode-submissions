class DNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // initialise double-linked list w/ dummies
        this.left = new DNode(null, null); // least-used end
        this.right = new DNode(null, null); // most-used end

        // node wiring
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _insertToRight(node) {
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
        this._insertToRight(node);

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

        const node = new DNode(key, value);
        this._insertToRight(node);
        this.map.set(key, node);

        // if LL > capacity, remove least-used
        if (this.map.size > this.capacity) {
            const lru = this.left.next;
            this._remove(lru);
            this.map.delete(lru.key);
        }

        return null;
    }
}
