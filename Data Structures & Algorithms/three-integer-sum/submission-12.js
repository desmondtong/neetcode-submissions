class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let out = [];
        for (let i = 0; i < nums.length; i++) {
            // prevent duplicates
            if (nums[i] === nums[i - 1]) continue;

            // two pointers
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    out.push([nums[i], nums[j], nums[k]]);

                    j++;
                    while (nums[j] == nums[j - 1]) j++;
                    k--;
                    while (nums[k] == nums[k + 1]) k--;
                } else if (nums[i] + nums[j] + nums[k] > 0) {
                    k--;
                    while (nums[k] == nums[k + 1]) k--;
                } else {
                    j++;
                    while (nums[j] == nums[j - 1]) j++;
                }
            }
        }

        return out;
    }
}
