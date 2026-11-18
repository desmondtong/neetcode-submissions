class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map = new Map();
        for (const char of s1) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        // console.log(map);

        for (let l = 0; l < s2.length; l++) {
            if (!map.get(s2[l])) continue;

            let r = l;
            const checkMap = new Map([...map.entries()]);
            while (r - l + 1 <= s1.length) {
                if (checkMap.get(s2[r]) && checkMap.get(s2[r]) != 0) {
                    checkMap.set(s2[r], checkMap.get(s2[r]) - 1);
                    // console.log({ l, r }, checkMap);

                    if (r - l + 1 == s1.length) {
                        // console.log("true:", { l, r });
                        return true;
                    } else {
                        r++;
                    }
                } else {
                    break;
                }
            }
        }

        return false;
    }
}
