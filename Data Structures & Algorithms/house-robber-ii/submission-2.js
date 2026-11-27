class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length <= 2) return Math.max(...nums);

        let dp1 = new Array(nums.length).fill(0);
        dp1[0] = nums[0];
        dp1[1] = Math.max(nums[0], nums[1]);

        let dp2 = new Array(nums.length).fill(0);
        dp2[1] = nums[1];
        dp2[2] = Math.max(nums[1], nums[2]);

        for (let i = 0 + 2; i < nums.length - 1; i++) {
            dp1[i] = Math.max(nums[i] + dp1[i - 2], dp1[i - 1]);
        }
        for (let i = 1 + 2; i < nums.length; i++) {
            dp2[i] = Math.max(nums[i] + dp2[i - 2], dp2[i - 1]);
        }
        // console.log({ dp1 });
        // console.log({ dp2 });

        return Math.max(...dp1, ...dp2);
    }
}
