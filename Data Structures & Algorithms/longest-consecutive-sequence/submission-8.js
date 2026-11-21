class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let best = 0;
        for (const num of set) {
            // find the start of a sequence
            if (set.has(num - 1)) continue;

            let count = 1;
                best = Math.max(best, count);
            while (set.has(num + count)) {
                count++;
                best = Math.max(best, count);
            }
        }

        return best;
    }
}
