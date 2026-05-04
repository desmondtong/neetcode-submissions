class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const sorted = piles.sort((a, b) => a - b);
        if (sorted.length == 1) return Math.ceil(sorted[0] / h);
        if (sorted.length == h) return sorted[sorted.length - 1];

        let l = 0;
        let r = sorted[sorted.length - 1];
        let k = Infinity;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            const isSuf = isSufficient(h, m + 1, sorted);
            if (isSuf) {
                r = m - 1;
                k = Math.min(k, m + 1);
            } else {
                l = m + 1;
            }
        }

        return k;
    }
}

function isSufficient(h, rate, sorted) {
    let numberOfHours = 0;
    for (let idx = 0; idx < sorted.length; idx++) {
        numberOfHours += Math.ceil(sorted[idx] / rate);
    }

    return numberOfHours <= h ? true : false;
}
