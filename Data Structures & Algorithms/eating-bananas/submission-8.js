class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lo = 1;
        let hi = Math.max(...piles);
        // console.log({ lo, hi });

        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);

            let k = piles.reduce((acc, item) => {
                acc += Math.ceil(item / mid);
                return acc;
            }, 0);
            // console.log({lo, mid,hi, k });

            if (k > h) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        // console.log({ lo, hi });

        return hi;
    }
}
