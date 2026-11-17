class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let out = [];
        for (let i = 0; i < nums.length - 2; i++) {
            // to prevent duplicate
            if (nums[i] == nums[i - 1]) continue;

            let j = i + 1;
            let k = nums.length - 1;

            // nums[i] + nums[j] + nums[k] > 0
            // nums[j] + nums[k] > - nums[i]
            while (j < k) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    out.push([nums[i], nums[j], nums[k]]);
                    let curK = nums[k];
                    let curJ = nums[j];

                    k--;
                    while (nums[k] == curK) k--;

                    j++;
                    while (nums[j] == curJ) j++;
                } else if (nums[i] + nums[j] + nums[k] > 0) {
                    let curK = nums[k];

                    k--;
                    while (nums[k] == curK) k--;
                } else if (nums[i] + nums[j] + nums[k] < 0) {
                    let curJ = nums[j];
                    
                    j++;
                    while (nums[j] == curJ) j++;
                }
            }
        }

        return out;
    }
}
