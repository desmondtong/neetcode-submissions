class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        dedup = set(nums)
        best = 0

        for num in dedup:
            # find starting number (smallest)
            if num - 1 in dedup:
                continue

            len = 1
            best = max(best, len)
            while num + len in dedup:
                len += 1
                best = max(best, len)

        return best
