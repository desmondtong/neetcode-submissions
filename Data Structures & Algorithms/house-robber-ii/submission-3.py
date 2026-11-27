class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return max(nums)

        dp1 = [0] * len(nums)
        dp1[0] = nums[0]
        dp1[1] = max([nums[0], nums[1]])

        dp2 = [0] * len(nums)
        dp2[1] = nums[1]
        dp2[2] = max([nums[1], nums[2]])

        for i in range(0 + 2, len(nums) - 1):
            dp1[i] = max(nums[i] + dp1[i - 2], dp1[i - 1])

        for i in range(1 + 2, len(nums)):
            dp2[i] = max(nums[i] + dp2[i - 2], dp2[i - 1])

        return max([*dp1, *dp2])
