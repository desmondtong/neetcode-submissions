class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const str1Map = getMap(s);
        const str2Map = getMap(t);

        for (const [key, freq] of str1Map.entries()) {
            if (!str2Map.has(key) || str2Map.get(key) != freq) return false;
        }

        for (const [key, freq] of str2Map.entries()) {
            if (!str1Map.has(key) || str1Map.get(key) != freq) return false;
        }

        return true
    }
}

function getMap(s) {
    const map = new Map();
    for (const char of s) {
        if (!map.has(char)) {
            map.set(char, 1);
            continue;
        }
        const curFreq = map.get(char);
        map.set(char, curFreq + 1);
    }
    console.log(map);

    return map;
}
