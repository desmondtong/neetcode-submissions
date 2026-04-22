class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const res = Array.from({ length }).fill(1);

        // left product
        let leftProduct = 1;
        for (let i = 0; i < length; i++) {
            res[i] = leftProduct;
            leftProduct *= nums[i];
        }
        console.log(res);

        // right product
        let rightProduct = 1;
        for (let i = length - 1; i >= 0; i--) {
            res[i] *= rightProduct
            rightProduct *= nums[i]
        }

        return res;
    }
}
