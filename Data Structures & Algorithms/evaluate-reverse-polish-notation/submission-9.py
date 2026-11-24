class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        st = []
        operators = ["+", "-", "*", "/"]

        for t in tokens:
            if t not in operators:
                st.append(int(t))
                continue

            b = st.pop()
            a = st.pop()

            if t == "+":
                cur = a + b
            elif t == "-":
                cur = a - b
            elif t == "*":
                cur = a * b
            else:
                cur = int(a / b)

            st.append(cur)

        return st[0]
