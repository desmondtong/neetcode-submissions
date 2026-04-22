class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // convert nums to set
        const numSet = new Set(nums);

        let longestSeq = 0;
        for (const num of numSet) {
            // check if current num is the start of a sequence
            if (numSet.has(num - 1)) continue;

            // building sequence & count
            let n = num + 1;
            let seqLength = 1;
            while (numSet.has(n)) {
                seqLength++;
                n++;
            }

            // get the max length
            longestSeq = Math.max(seqLength, longestSeq);
        }

        return longestSeq;
    }
}
