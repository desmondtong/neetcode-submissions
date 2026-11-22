class MinStack {
    constructor() {
        this.st = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val);

        if (this.min.length == 0 || val <= this.min[this.min.length - 1]) {
            this.min.push(val);
        }
        // console.log("in push:", this.st);
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.st.pop();
        if (this.min[this.min.length - 1] == popped) {
            this.min.pop();
        }
        // console.log("in pop:", this.st);
        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
