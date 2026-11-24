import math


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        lo = 1
        hi = max(piles)

        while lo < hi:
            mid = (lo + hi) // 2
            # print(lo, mid, hi)

            timeRequired = sum(math.ceil(item / mid) for item in piles)
            
            if timeRequired > h:
                lo = mid + 1
            else:
                hi = mid
        
        return lo
