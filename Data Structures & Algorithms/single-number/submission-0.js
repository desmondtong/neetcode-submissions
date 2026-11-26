class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const appearedOnce = nums.reduce((acc, item) => {
            return acc ^ item;
        }, 0);
        return appearedOnce
    }
}
