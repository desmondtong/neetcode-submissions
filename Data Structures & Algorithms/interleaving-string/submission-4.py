class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        m = len(s1)
        n = len(s2)
        if m + n != len(s3):
            return False

        dp = [[False] * (n + 1) for _ in range(m + 1)]
        dp[0][0] = True
        # print(*dp, sep="\n")

        for i in range(0, m + 1):
            for j in range(0, n + 1):
                k = i + j - 1
                if i > 0 and dp[i - 1][j] and s1[i - 1] == s3[k]:
                    dp[i][j] = True
                if j > 0 and dp[i][j - 1] and s2[j - 1] == s3[k]:
                    dp[i][j] = True

        return dp[m][n]
