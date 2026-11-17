class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixSum = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            prefixSum[i] = (prefixSum[i - 1] ?? 1) * nums[i];
        }
        // console.log(prefixSum);

        const suffixSum = new Array(nums.length).fill(0);
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixSum[i] = (suffixSum[i + 1] ?? 1) * nums[i];
        }
        // console.log(suffixSum);

        const out = [];
        for (let i = 0; i < nums.length; i++) {
            out.push((prefixSum[i - 1] ?? 1) * (suffixSum[i + 1] ?? 1));
        }

        return out;
    }
}
