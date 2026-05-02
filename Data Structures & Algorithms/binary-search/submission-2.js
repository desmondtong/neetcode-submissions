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
            const mid = Math.floor((r + l) / 2);

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                // left side
                r = mid - 1;
            } else {
                // right side
                l = mid + 1;
            }
        }

        return -1;
    }
}
