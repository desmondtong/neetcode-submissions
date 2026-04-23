class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum == 0) {
                    res.push([nums[i], nums[l], nums[r]]);
                    while (nums[r] == nums[r - 1]) r--;
                    while (nums[l] == nums[l + 1]) l++;
                    r--;
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    // sum < remaining
                    l++;
                }
            }
        }

        return res;
    }
}
