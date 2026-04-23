class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length == 2) return [1, 2];

        // [1,2,3,4,5,6,7,8,9] = 14
        for (let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i];
            if (diff > numbers[numbers.length - 1]) continue;

            let curIdx = i + 1;
            while (curIdx < numbers.length) {
                if (numbers[i] + numbers[curIdx] == target) return [i + 1, curIdx + 1];
                curIdx++;
            }
        }
    }
}
