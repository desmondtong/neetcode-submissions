class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const m = s1.length;
        const n = s2.length;
        if (m + n != s3.length) return false;

        // store dp[i][j]
        // such that i nos of s1 and j nost of s2 can form s3 (up to i+j nos of char)
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
        dp[0][0] = true;

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                const k = i + j - 1;
                if (i > 0 && dp[i - 1][j] && s1[i - 1] == s3[k]) dp[i][j] = true;
                if (j > 0 && dp[i][j - 1] && s2[j - 1] == s3[k]) dp[i][j] = true;
            }
        }
        console.log({dp})
        return dp[m][n]
    }
}
