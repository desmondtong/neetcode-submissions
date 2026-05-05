class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const numsA = nums1.length > nums2.length ? nums2 : nums1;
        const numsB = nums1.length > nums2.length ? nums1 : nums2;
        console.log({ numsA, numsB });

        const total = numsA.length + numsB.length;
        const half = Math.floor((total + 1) / 2);

        let l = 0;
        let r = numsA.length;

        while (l <= r) {
            let i = Math.floor((l + r) / 2);
            let j = half - i;
            console.log({ i, j });

            let aLeft = i > 0 ? numsA[i - 1] : Number.MIN_SAFE_INTEGER;
            let aRight = i < numsA.length ? numsA[i] : Number.MAX_SAFE_INTEGER;
            let bLeft = j > 0 ? numsB[j - 1] : Number.MIN_SAFE_INTEGER;
            let bRight = j < numsB.length ? numsB[j] : Number.MAX_SAFE_INTEGER;

            console.log("partition:", { aLeft, aRight, bLeft, bRight });

            if (aLeft <= bRight && bLeft <= aRight) {
                console.log("correct partition:", aLeft, bRight);
                console.log("correct partition:", bLeft, aRight);

                if (total % 2 !== 0) {
                    // odd
                    return Math.max(aLeft, bLeft);
                } else {
                    // even
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
            } else if (aLeft >= bRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }

        return -1
    }
}
