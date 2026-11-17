class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const sorted = str
                .split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");

            if (!map.get(sorted)) map.set(sorted, []);
            map.get(sorted).push(str);
        }
        
        return [...map.values()]
    }
}
