class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        // create tCount
        let tCount = new Map();
        for (let i = 0; i < t.length; i++) {
            tCount.set(t[i], (tCount.get(t[i]) || 0) + 1);
        }

        // check first left for sliding window
        let l = 0;
        while (l < s.length) {
            if (!tCount.has(s[l])) {
                if (l == s.length - 1) return "";
                l++;
                continue;
            }

            break;
        }
        console.log("first left:", l);

        // start sliding window
        let str = [0, 0];
        let minLen = Infinity;

        let sCount = new Map();
        for (let r = l; r < s.length; r++) {
            if (tCount.has(s[r])) {
                sCount.set(s[r], (sCount.get(s[r]) || 0) + 1);
            }

            // check current window if all substr present
            let isAllPresent = checkPresent(tCount, sCount);
            if (isAllPresent) {
                console.log(isAllPresent, str);
                console.log(tCount, sCount);

                // try to shrink to get smallest possible
                while (isAllPresent) {
                    sCount.set(s[l], sCount.get(s[l]) - 1);
                    l++;
                    isAllPresent = checkPresent(tCount, sCount);
                }

                // update shorted str indexes
                if (r - (l - 1) + 1 < minLen) {
                    minLen = r - (l - 1) + 1;
                    str = [l - 1, r];
                }

                // change l for sliding window
                while (!tCount.has(s[l]) && l <= r) {
                    l++;
                }
            }
        }

        return minLen === Infinity ? "" : s.slice(str[0], str[1] + 1);
    }
}

function checkPresent(tCount, sCount) {
    const keys = [...tCount.keys()];
    for (let i = 0; i < keys.length; i++) {
        if (!sCount.has(keys[i])) return false;
        if (tCount.get(keys[i]) > sCount.get(keys[i])) return false;
    }

    return true;
}
