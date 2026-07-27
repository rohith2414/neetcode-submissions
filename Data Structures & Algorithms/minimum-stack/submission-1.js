class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(!this.stack.length) {
            this.stack.push(val);
            this.min = val;
        } else {
            if(this.min < val) {
                this.stack.push(val);
            } else {
                this.stack.push(2 * val - this.min);
                this.min = val;
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let x = this.stack.pop();

        if(x > this.min) {
            return x;
        } else {
            this.min = 2 * this.min - x;
        }
    }

    /**
     * @return {number}
     */
    top() {
        let x = this.stack[this.stack.length - 1];
        if(x > this.min) {
            return x;
        } else {
            return this.min;
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
