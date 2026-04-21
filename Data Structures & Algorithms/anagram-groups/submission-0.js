class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = strs.reduce((acc, item) => {
            const key = getArrayKey(item);
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);

            return acc;
        }, {});

        return Object.values(map)
    }
}

function getArrayKey(str) {
    const arrayKey = Array.from({ length: 26 }).fill(0);

    for (let i = 0; i < str.length; i++) {
        arrayKey[str.charCodeAt(i) - 97]++;
    }

    return JSON.stringify(arrayKey);
}
