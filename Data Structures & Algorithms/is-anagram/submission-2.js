class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        let str1Map = getMap(s);
        console.log(str1Map);
        for (const char of t) {
            const curFreq = str1Map.get(char) - 1;
            str1Map.set(char, curFreq);
        }

        const isAnagram = str1Map.values().every((item) => item == 0);
        return isAnagram
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

    return map;
}
