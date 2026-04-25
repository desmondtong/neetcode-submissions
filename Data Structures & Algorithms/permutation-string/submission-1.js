class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let s1Key = Array.from({ length: 26 }).fill(0);
        let s2Key = Array.from({ length: 26 }).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Key[s1.charCodeAt(i) - 97]++;
            s2Key[s2.charCodeAt(i) - 97]++;
        }
        console.log("init:", s2Key);

        for (let l = 0, r = l + s1.length - 1; r < s2.length; l++, r++) {
            console.log(l, r);
            if (JSON.stringify(s2Key) == JSON.stringify(s1Key)) return true;

            if (r != s2.length - 1) {
                s2Key[s2[l].charCodeAt(0) - 97]--;
                s2Key[s2[r + 1].charCodeAt(0) - 97]++;
            }
        }

        return false;
    }
}
