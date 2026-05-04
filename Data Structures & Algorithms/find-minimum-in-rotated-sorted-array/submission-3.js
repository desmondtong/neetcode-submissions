class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // if (nums.length == 1) return nums[0];

        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            console.log(l, m, r);

            if (nums[l] <= nums[m] && nums[m] < nums[r]) return nums[l];
            if (nums[l] <= nums[m]) {
                // min on right portion
                l = m + 1;
            } else if (nums[m] < nums[r]) {
                // min on left portion
                r = m;
            }
        }

        return nums[l];
    }
}
