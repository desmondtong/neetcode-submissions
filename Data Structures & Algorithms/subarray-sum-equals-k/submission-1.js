class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // prefix[j] - prefix[i-1] = k
        // prefix[i-1] = prefix[j] - k
        // find if prefix[i-1] exist

        let count = 0;
        let curSum = 0;
        let freqMap = new Map([[0, 1]]);

        for (let i = 0; i < nums.length; i++) {
            curSum += nums[i];
            // console.log({ curSum });
            // check nos of previous curSum that can be minus by curSum to equals k
            // console.log("check:", freqMap.get(curSum - k) || 0);
            count += freqMap.get(curSum - k) || 0;

            // update curSum freqMap
            freqMap.set(curSum, (freqMap.get(curSum) ?? 0) + 1);
            // console.log({ freqMap });
            // console.log("====");
        }

        return count;
    }
}
