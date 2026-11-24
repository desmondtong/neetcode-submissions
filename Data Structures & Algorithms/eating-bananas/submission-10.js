class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lo = 0;
        let hi = Math.max(...piles);

        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);

            let timeRequired = piles.reduce((acc, item) => {
                acc += Math.ceil(item / mid);
                return acc;
            }, 0);

            if (timeRequired > h) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        return lo;
    }
}
