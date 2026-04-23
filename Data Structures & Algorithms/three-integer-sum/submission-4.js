class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        const sortedNum = nums.sort((a, b) => a - b);

        for (let i = 0; i < sortedNum.length; i++) {
            if (sortedNum[i] == sortedNum[i - 1]) continue;

            let l = i + 1;
            let r = sortedNum.length - 1;
            while (l < r) {
                const sum = sortedNum[i] + sortedNum[l] + sortedNum[r];

                if (sum == 0) {
                    res.push([sortedNum[i], sortedNum[l], sortedNum[r]]);
                    while (sortedNum[r] == sortedNum[r - 1]) r--;
                    while (sortedNum[l] == sortedNum[l + 1]) l++;
                    r--;
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    // sum < remaining
                    l++;
                }
            }
        }

        return res;
    }
}
