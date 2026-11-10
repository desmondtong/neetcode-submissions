class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // length of subsequence that ends with i
        const dp = new Array(nums.length).fill(1);

        let max = 1;
        for (let i = 1; i < dp.length; i++) {
            let j = 0;
            while (j < i) { // revisit all previous one to see if current num can be a subsequence
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[j] + 1, dp[i]);

                    // track max while traversing array
                    max = Math.max(max, dp[i]);
                }
                j++;
            }
        }
        // console.log(dp);

        return max;
    }
}
