class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        st = []  # monotonic desc stack - indexes looking for next greater

        for i, temp in enumerate(temperatures):
            while len(st) and temp > temperatures[st[-1]]:
                idx = st.pop()
                result[idx] = i - idx

            st.append(i)

        return result
