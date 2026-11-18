class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        // create count up to first sliding window (s1.length)
        const s1Freq = new Array(26).fill(0);
        const s2Freq = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Freq[s1[i].charCodeAt(0) - 97]++;
            s2Freq[s2[i].charCodeAt(0) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < s1Freq.length; i++) {
            if (s1Freq[i] === s2Freq[i]) matches++;
        }

        // slide the window
        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;
            // console.log({ l, r ,matches});

            // add "r" element in
            let rIdx = s2[r].charCodeAt(0) - 97;
            // console.log(r,s2[r],rIdx)
            s2Freq[rIdx]++;
            if (s2Freq[rIdx] == s1Freq[rIdx]) {
                matches++;
            } else if (s2Freq[rIdx] == s1Freq[rIdx] + 1) {
                // was matches before ++, hence
                matches--;
            }

            // remove "l" element out
            let lIdx = s2[l].charCodeAt(0) - 97;
            s2Freq[lIdx]--;
            if (s2Freq[lIdx] == s1Freq[lIdx]) {
                matches++;
            } else if (s2Freq[lIdx] == s1Freq[lIdx] - 1) {
                // was matches before --, hence
                matches--;
            }

            l++;
        }

        return matches === 26;
    }
}
