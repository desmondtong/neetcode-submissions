class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = ["+", "-", "*", "/"];
        let st = [];

        for (const t of tokens) {
            if (!operators.includes(t)) {
                st.push(Number(t));
                continue;
            }
            // console.log({ st });

            let cur = null;
            let i = 0;
            while (st.length && i < 2) {
                let num = st.pop();
                // console.log({ num });

                if (t == "+") {
                    cur = cur == null ? num : num + cur;
                } else if (t == "-") {
                    cur = cur == null ? num : num - cur;
                } else if (t == "*") {
                    cur = cur == null ? num : num * cur;
                } else {
                    cur = cur == null ? num : Math.trunc(num / cur);
                }

                i++;
            }
            // console.log({ cur });

            st.push(cur);
        }

        return st[0];
    }
}
