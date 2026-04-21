class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join("");

            const arr = map.get(key) || [];
            arr.push(strs[i]);

            map.set(key, arr);
        }

        return [...map.values()]
    }
}
