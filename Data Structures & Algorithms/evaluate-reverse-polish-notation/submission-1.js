class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length == 1) return Number(tokens[0]);

        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            if (isNumeric(tokens[i])) {
                stack.push(Number(tokens[i]));
            } else {
                const num2 = stack.pop();
                const num1 = stack.pop();
                console.log(num1, num2, tokens[i]);
                const curRes = operations(num1, num2, tokens[i]);
                stack.push(curRes);
            }
        }

        return stack.length == 1 ? stack[0] : "";
    }
}

function operations(num1, num2, operators) {
    let res;
    switch (operators) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = Math.trunc(num1 / num2);

            break;
    }

    return res;
}

function isNumeric(str) {
    return !isNaN(str);
}
