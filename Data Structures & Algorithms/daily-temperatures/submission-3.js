class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = []; // idx

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const popped = stack.pop();
                res[popped] = i - popped;
            }

            stack.push(i);
        }

        return res;
    }
}
