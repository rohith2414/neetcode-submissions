class Node {
    constructor(key = -1, val = -1, next = null, prev = null) {
        this.val = val;
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            let node = this.map.get(key);
            let val = node.val;
            this.deleteNode(node);
            this.insertAfterHead(node);
            return val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            let node = this.map.get(key);
            node.val = value;
            this.deleteNode(node);
            this.insertAfterHead(node);
        } else {
            if(this.map.size == this.capacity) {
                let node = this.tail.prev;
                this.map.delete(node.key);
                this.deleteNode(node);
                node = new Node(key, value);
                this.insertAfterHead(node);
                this.map.set(key, node);
            } else {
                let node = new Node(key, value);
                this.insertAfterHead(node);
                this.map.set(key, node);
            }
        }
    }

    insertAfterHead(node) {
        let currNodeAfterHead = this.head.next;
        node.next = currNodeAfterHead;
        currNodeAfterHead.prev = node;
        node.prev = this.head;
        this.head.next = node;
    }

    deleteNode(node) {
        let afterNode = node.next;
        let beforeNode = node.prev;

        beforeNode.next =  afterNode;
        afterNode.prev = beforeNode;
    }

}
