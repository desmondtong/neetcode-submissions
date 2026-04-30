class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // distance / speed = timeSpent

        let arr = [];
        for (let i = 0; i < position.length; i++) {
            const timeSpent = (target - position[i]) / speed[i];
            arr.push([position[i], speed[i], timeSpent]);
        }
        arr = arr.sort((a, b) => b[0] - a[0]);
        console.log(arr);

        let res = 0;
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (stack.length == 0) {
                res++;
            } else {
                const [p, s, t] = stack[stack.length - 1];
                if (arr[i][2] > t) {
                    res++;
                } else {
                    continue;
                }
            }

            stack.push(arr[i]);
        }

        return res;
    }
}
