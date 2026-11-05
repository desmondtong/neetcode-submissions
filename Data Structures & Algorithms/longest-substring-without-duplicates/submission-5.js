class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) return 0;

        let longest = 1;
        let r = 0;
        let seenStr = new Set();

        for (let l = 0; l < s.length; l++) {
            while (s[r] && !seenStr.has(s[r])) {
                seenStr.add(s[r]);
                // console.log(l, r, { seenStr });
                r++;
            }
            // console.log({ l, r });
            longest = Math.max(longest, r - l);

            seenStr.delete(s[l]);
        }

        return longest;
    }
}
