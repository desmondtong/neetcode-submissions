class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // bucket sort
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        // console.log(buckets);
        for (const [num, freq] of map.entries()) {
            // console.log({ num, freq });
            const bucket = buckets[freq];
            bucket.push(num);
        }
        // console.log(buckets);

        // get top K
        let i = nums.length;
        let out = [];
        while (i >= 0 && out.length < k) {
            if (buckets[i].length != 0) {
                out.push(...buckets[i]);
            }
            i--;
        }

        return out;
    }
}
