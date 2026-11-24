class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let st = []; // monotonic desc st - indexes that wait for greater

        for (let i = 0; i < temperatures.length; i++) {
            while (st.length && temperatures[i] > temperatures[st[st.length - 1]]) {
                const idx = st.pop();
                result[idx] = i - idx;
            }

            st.push(i);
        }

        return result
    }
}
