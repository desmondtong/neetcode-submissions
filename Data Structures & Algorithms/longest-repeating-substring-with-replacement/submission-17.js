class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length == 1) return 1

        const map = new Map();

        let j = 1;
        let longest = 0;
        for (let i = 0; i < s.length; i++) {
            // add in map
            map.set(s[i], (map.get(s[i]) ?? 0) + 1);
            // console.log(map)

            // expand sliding window
            // replace the less frequent one with the most frequent one
            // if (i == j) j++;
            while (j < s.length) {
                map.set(s[j], (map.get(s[j]) ?? 0) + 1);
                const mostFreq = Math.max(...map.values());
                const curSubStrLen = j - i + 1;

                if (curSubStrLen - mostFreq - k <= 0) {
                    longest = Math.max(longest, curSubStrLen);
                    j++;
                } else {
                    map.set(s[i], map.get(s[i]) - 1);
                    map.set(s[j], map.get(s[j]) - 1);
                    i++;
                }
            }
        }

        return longest;
    }
}
