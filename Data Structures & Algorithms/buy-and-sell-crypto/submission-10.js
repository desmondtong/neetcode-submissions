class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length == 1) return 0;

        let res = 0;
        let l = 0;
        for (let r = 1; r < prices.length; r++) {
            if (prices[r] > prices[l]) {
                res = Math.max(res, prices[r] - prices[l]);
            } else if (prices[r] < prices[l]) {
                l++;
            }

            while (l < prices.length - 1 && r == prices.length - 1) {
                l++;
                res = Math.max(res, prices[r] - prices[l]);
            }
        }

        return res;
    }
}
