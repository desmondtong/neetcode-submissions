class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        // console.log("a".charCodeAt(0));
        for (const str of strs) {
            // sort OR freq word count
            let charCount = new Array(25).fill(0);
            for (const char of str) {
                const charCode = char.charCodeAt(0) - 97;
                charCount[charCode]++;
            }
            // console.log(str, charCount)

            // put into map
            let charCodeJoin = charCount.join("-")
            if (!map.get(charCodeJoin)) map.set(charCodeJoin, []);
            map.get(charCodeJoin).push(str);
        }

        return [...map.values()];
    }
}
