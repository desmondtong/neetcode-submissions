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

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            console.log(l, m, r);

            if (nums[m] == target) return m;
            if (nums[l] == target) return l;
            if (nums[r] == target) return r;

            if (nums[l] <= nums[m]) {
                // left portion sorted
                if (target < nums[m] && target > nums[l]) {
                    r = m;
                } else {
                    l = m + 1;
                }
            } else if (nums[m] < nums[r]) {
                // right portion sorted
                if (target > nums[m] && target < nums[r]) {
                    l = m + 1;
                } else {
                    r = m;
                }
            }
        }

        return -1;
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
