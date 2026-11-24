class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let best = 0;
        for (const num of set) {
            // check if its starting
            if (set.has(num - 1)) continue;

            let len = 1;
            best = Math.max(best, len);
            while (set.has(num + len)) {
                len++;
                best = Math.max(best, len);
            }
        }

        return best;
    }
}
