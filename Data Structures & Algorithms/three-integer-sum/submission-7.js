class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        console.log({ sorted });

        let result = [];
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] == sorted[i - 1]) continue;

            let j = i + 1;
            let k = sorted.length - 1;
            const target = sorted[i];
            // sorted[i] + sorted[j] + sorted[k] == 0
            // sorted[i]  == -(sorted[j] + sorted[k])
            // -sorted[i]  == sorted[j] + sorted[k]

            while (j < k) {
                if (sorted[j] + sorted[k] > -target) k--;
                if (sorted[j] + sorted[k] < -target) j++;
                if (j != k && sorted[j] + sorted[k] == -target) {
                    result.push([sorted[i], sorted[j], sorted[k]]);

                    k--;
                    while (sorted[k] == sorted[k + 1]) k--;

                    j++;
                    while (sorted[k] == sorted[j - 1]) j++;
                }
            }
        }

        return result;
    }
}
