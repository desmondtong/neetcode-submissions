class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        const output = [];

        for (let i = 0; i < nums.length; i++) {
            const curNum = nums[i];

            const freq = freqMap.get(curNum) || 0;
            freqMap.set(curNum, freq + 1);
        }

        // sort freqMap based on values
        const sortedMap = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
        const slicedArr = sortedMap.slice(0, k).map((item) => item[0]);

        return slicedArr;
    }
}
