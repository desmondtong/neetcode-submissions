class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k == 1) return nums;

        // initialise maxHeap
        const maxHeap = new PriorityQueue((a, b) =>
            b.num != a.num ? b.num - a.num : a.idx - b.idx,
        );
        for (let i = 0; i < k; i++) {
            maxHeap.enqueue({ num: nums[i], idx: i });
        }

        // as the sliding window proceeds,
        let res = [];
        for (let i = 0, j = i + k - 1; j < nums.length; i++, j++) {
            // push max into res
            let { num, idx } = maxHeap.front();
            console.log(maxHeap.front(), i, j);
            res.push(num);

            // update heap
            if (j != nums.length - 1) {
                // check if top still valid
                while (idx <= i) {
                    maxHeap.dequeue();
                    console.log("here");
                    idx = maxHeap.front().idx;
                }

                // add next element
                maxHeap.enqueue({ num: nums[j + 1], idx: j + 1 });
            }
        }

        return res;
    }
}
