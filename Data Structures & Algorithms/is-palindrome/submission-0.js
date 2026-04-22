class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length == 1) return true;

        // build concat lower-case alphanumeric-only str
        let concatStr = "";
        for (const char of s) {
            const code = char.charCodeAt(s);
            if (
                !(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123) // lower alpha (a-z)
            ) {
                continue;
            }

            concatStr += char.toLowerCase();
        }
        // console.log(concatStr);

        // do two pointer check
        // 5 -> 2.5 [x,x,x,x,x]
        // 4 -> 2
        for (let i = 0; i < Math.floor(concatStr.length / 2); i++) {
            const secondIdx = concatStr.length - 1 - i;
            // console.log(secondIdx);
            if (concatStr[i] != concatStr[secondIdx]) return false;
        }

        return true;
    }
}
