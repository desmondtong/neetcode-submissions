class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = []; // idx

        for (let i = 0; i < temperatures.length; i++) {
            const curTemp = temperatures[i];
            if (stack.length > 0) {
                let popped = stack[stack.length - 1];
                console.log(`${i}outWhile:`, popped);

                while (curTemp > temperatures[popped] && stack.length > 0) {
                    stack.pop();
                    console.log(`${i}inWhile:`, popped);
                    res[popped] = i - popped;

                    if (stack.length > 0) popped = stack[stack.length - 1];
                }
            }

            stack.push(i);
        }

        return res;
    }
}
