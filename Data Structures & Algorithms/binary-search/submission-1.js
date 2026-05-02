class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const diff = Math.floor((r - l) / 2);
            const midIdx = l + diff;

            if (nums[midIdx] == target) {
                return midIdx;
            } else if (nums[midIdx] > target) {
                // left side
                r = midIdx - 1;
            } else {
                // right side
                l = midIdx + 1;
            }
        }

        return -1;
    }
}
