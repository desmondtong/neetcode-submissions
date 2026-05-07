class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            let num = nums[Math.abs(nums[i])];
            console.log(num)
            if (num < 0) return Math.abs(nums[i]);

            nums[Math.abs(nums[i])] *= -1;
            console.log(nums)
        }
    }
}
