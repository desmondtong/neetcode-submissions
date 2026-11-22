class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // find cut point
        let lo = 0;
        let hi = nums.length - 1;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);

            if (nums[mid] > nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        const cutPoint = lo;
        console.log({ cutPoint });

        // find target
        if (target >= nums[lo] && target <= nums[nums.length - 1]) {
            lo = cutPoint;
            hi = nums.length - 1;
        } else {
            lo = 0;
            hi = cutPoint - 1;
        }
        console.log({ lo, hi });

        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (target == nums[mid]) return mid;

            if (target > nums[mid]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return -1
    }
}
