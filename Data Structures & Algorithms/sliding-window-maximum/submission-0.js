class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // intialise the max number within the first sliding window

        // as the sliding window proceeds,
        let res = [];
        for (let i = 0, j = i + k-1; j < nums.length; i++, j++) {
            res.push(Math.max(...nums.slice(i,j+1)))
        }

        return res
    }
}
