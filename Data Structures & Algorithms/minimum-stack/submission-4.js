class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const ms = this.minStack;

        if (ms.length == 0 || (ms.length && val <= ms[ms.length - 1])) ms.push(val);
        // console.log("push this.stack:", this.stack);
        // console.log("push this.minStack:", ms);

        return;
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop();
        const ms = this.minStack;
        // console.log("pop popped:", popped);
        // console.log("pop this.minStack:", ms);
        if (ms.length && popped == ms[ms.length - 1]) ms.pop();
        // console.log("pop this.minStack after:", ms);

        return;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
