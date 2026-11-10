class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // dp to store the num of coins required to make amount i
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let a = 1; a <= amount; a++) {
            for (const c of coins) {
                if (a - c >= 0) {
                    // dp[a-c] : check num of coins required to make amount "a-c" that was calculated previously
                    // +1 : to include the current coin, c, required
                    dp[a] = Math.min(dp[a], dp[a - c] + 1);
                }
            }
        }

        return dp[amount] == Infinity ? -1 : dp[amount];
    }
}
