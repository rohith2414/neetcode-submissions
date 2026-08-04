class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.len = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        
        let i = 0;
        let temp = this.head;
        while(temp != null) {
            if(i == index) {
                return temp.val;
            }
            temp = temp.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = new Node(val, this.head);
        this.head = node;
        this.len++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = new Node(val);
        let temp = this.head;
        if (this.head === null) {
            this.head = node;
            this.len++;
            return;
        }
        while(temp.next != null) {
            temp = temp.next;
        }

        temp.next = node;
        this.len++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(index >= this.len) {
            return false;
        } else if(index === 0) {
            this.len--;
            this.head = this.head.next;
            return true;
        }
        let i = 0;
        let temp = this.head;
        while(temp != null) {
            if(i == index - 1) {
                break;
            }
            i++;
            temp = temp.next;
        }
        this.len--;

        temp.next = temp.next &&  temp.next.next ? temp.next.next : null;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        let temp = this.head;
        while(temp != null) {
            arr.push(temp.val);
            temp = temp.next;
        }

        return arr;
    }
}
