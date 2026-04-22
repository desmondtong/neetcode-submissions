class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // convert nums to set
        const numSet = new Set(nums);

        let seqLength = 0;
        for (const num of nums) {
            // check if current num is the start of a sequence
            if (numSet.has(num - 1)) continue;

            // building sequence & count
            let n = num + 1;
            let seqArr = [num];
            while (numSet.has(n)) {
                seqArr.push(n);
                n++;
            }

            // check whether should i update seqLength
            if (seqArr.length > seqLength) seqLength = seqArr.length;
        }

        return seqLength
    }
}
