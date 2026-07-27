class MinStack {
    constructor() {
        this.stack = [];
        this.length = 0;
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.length++;
        this.min = Math.min(this.min, val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Infinity;
        for(let i = 0; i < this.length; i++) {
            min = Math.min(min, this.stack[i]);
        }
        return min;
    }
}
