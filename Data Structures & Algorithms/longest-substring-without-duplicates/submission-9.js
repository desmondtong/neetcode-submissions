class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length <= 1) return s.length;

        let longest = 1;
        let seen = new Set();

        let l = 0;
        let r = l + 1;

        while (l < r && r < s.length) {
            if (!seen.has(s[l])) seen.add(s[l]);

            if (!seen.has(s[r])) {
                // console.log(seen, !seen.has(s[r]), s[r]);
                seen.add(s[r]);
                // console.log({ seen });

                longest = Math.max(longest, r - l + 1);
                r++;
            } else {
                seen.delete(s[l]);

                l++;
                if (l == r) r++;
            }
        }

        return longest;
    }
}
