class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let seen = new Set();

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            // console.log("===", { l, r });
            while (l <= r && seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }

            seen.add(s[r]);
            // console.log({ l, r }, r - l + 1);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
