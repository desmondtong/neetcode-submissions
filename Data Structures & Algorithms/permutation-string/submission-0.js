class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Key = getKey(s1);

        for (let l = 0, r = l + s1.length - 1; r < s2.length; l++, r++) {
            const curKey = getKey(s2.slice(l, r + 1));
            if (curKey == s1Key) return true;
        }

        return false;
    }
}

function getKey(str) {
    let key = Array.from({ length: 26 }).fill(0);

    for (let i = 0; i < str.length; i++) {
        key[str.charCodeAt(i) - 97]++;
    }
    key = JSON.stringify(key);

    return key;
}
