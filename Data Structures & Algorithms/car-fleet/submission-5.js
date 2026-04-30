class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // distance / speed = timeSpent

        // sort in descending order
        let arr = [];
        for (let i = 0; i < position.length; i++) {
            const timeSpent = (target - position[i]) / speed[i];
            arr.push([position[i], speed[i], timeSpent]);
        }
        arr = arr.sort((a, b) => b[0] - a[0]);

        // cal fleet
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (stack.length == 0) {
                stack.push(arr[i][2]);
            } else {
                const prevSpeed = stack[stack.length - 1];
                if (arr[i][2] > prevSpeed) {
                    stack.push(arr[i][2]);
                }
            }
        }

        return stack.length;
    }
}
