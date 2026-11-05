class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        // console.log(result)

        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const idx = stack.pop();
                result[idx] = i - idx;
            }

            stack.push(i);
        }

        return result;
    }
}
