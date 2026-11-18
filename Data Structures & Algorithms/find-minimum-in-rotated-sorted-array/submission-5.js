class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length == 1) return nums[0];

        let lo = 0;
        let hi = nums.length - 1;

        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);

            // decide which segment to continue
            if (nums[mid] > nums[hi]) {
                // lo..mid sorted
                lo = mid + 1;
            } else {
                // mid..hi sorted
                hi = mid;
            }
        }

        return nums[lo];
    }
}
