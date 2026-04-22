class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // create map ->  index : num
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            numMap.set(i, nums[i]);
        }

        // loop through nums and calculate
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            let idxToGet = 0;
            let product = 1;
            while (idxToGet < nums.length) {
                if (idxToGet != i) {
                    product *= numMap.get(idxToGet);
                }
                idxToGet++;
            }

            res.push(product);
        }

        return res;
    }
}
