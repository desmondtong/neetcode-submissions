class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        console.log(set);

        let longest = 0;
        for (const num of set) {
            if (set.has(num - 1)) continue; // looking for start of the seq
            // console.log({ num });

            let len = 1;
            let checkNum = num + 1;
            while (set.has(checkNum)) {
                len++;
                checkNum++;
            }

            longest = Math.max(longest, len);
        }

        return longest;
    }
}
