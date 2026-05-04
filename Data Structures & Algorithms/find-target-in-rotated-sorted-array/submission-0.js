class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // find min / cut point
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            // console.log(l, m, r);

            if (nums[l] <= nums[m] && nums[m] < nums[r]) break;
            if (nums[l] <= nums[m]) {
                // min on right portion
                l = m + 1;
            } else if (nums[m] < nums[r]) {
                // min on left portion
                r = m;
            }
        }

        const firstSegment = bSearch(l, nums.length - 1, nums, target);

        if (firstSegment == -1 && l != 0) {
            const secondSegment = bSearch(0, l - 1, nums, target);
            return secondSegment;
        } else {
            return firstSegment;
        }
    }
}

function bSearch(left, right, nums, target) {
    let l = left;
    let r = right;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) return m;
        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}
