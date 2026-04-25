class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length == 0) return 0;

        let indexMap = new Map();
        let longest = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const dupIdx = indexMap.get(s[r]);
            if (dupIdx != null && l <= dupIdx && dupIdx < r) {
                l = dupIdx + 1;
                console.log("dup:", dupIdx, s[r]);
            }
            indexMap.set(s[r], r);

            console.log(l, r);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
