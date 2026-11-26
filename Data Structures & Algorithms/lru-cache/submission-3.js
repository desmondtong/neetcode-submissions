class DNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.left = new DNode(null, null); // least-recent
        this.right = new DNode(null, null); // most-recent
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _insertAtRight(node) {
        const prev = this.right.prev;

        // btw new node and prev most-recent node
        prev.next = node;
        node.prev = prev;

        // btw new node and this.right
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.get(key)) return -1;

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
        // if key exists
        if (this.map.get(key)) {
            this._remove(this.map.get(key));
        }

        const node = new DNode(key, value);
        this.map.set(key, node);
        this._insertAtRight(node);

        if (this.map.size > this.capacity) {
            const leastNode = this.left.next;
            this._remove(leastNode);
            this.map.delete(leastNode.key);
        }
    }
}
