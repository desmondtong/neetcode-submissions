class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 != 0) return false;

        // construct stack (first half)
        const left = ["(", "{", "["];
        const stack = []; // LI-FO
        for (let i = 0; i < s.length; i++) {
            if (stack.length == 0 || left.includes(s[i])) {
                stack.push(s[i]);
            }

            if (s[i] == "}" && stack.pop() != "{") {
                return false;
            } else if (s[i] == ")" && stack.pop() != "(") {
                return false;
            } else if (s[i] == "]" && stack.pop() != "[") {
                return false;
            }
            console.log(stack);
        }

        return stack.length == 0 ? true : false;
    }
}
