class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0;
        let r = Math.max(...piles);
        let k = Infinity;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            const isSuf = isSufficient(h, m + 1, piles);
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

function isSufficient(h, rate, piles) {
    let numberOfHours = 0;
    for (let idx = 0; idx < piles.length; idx++) {
        numberOfHours += Math.ceil(piles[idx] / rate);
    }

    return numberOfHours <= h ? true : false;
}
