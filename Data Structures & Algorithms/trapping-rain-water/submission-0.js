class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = Array.from({ length: height.length }).fill(0);
        const suffix = Array.from({ length: height.length }).fill(0);

        let curMax = 0;
        for (let i = 0; i < height.length; i++) {
            if (height[i] < curMax) prefix[i] = curMax;
            curMax = Math.max(curMax, height[i]);
        }

        curMax = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            if (height[i] < curMax) suffix[i] = curMax;
            curMax = Math.max(curMax, height[i]);
        }

        let waterTrapped = 0;
        for (let i = 0; i < height.length; i++) {
            const curHeight = Math.max(Math.min(prefix[i], suffix[i]) - height[i], 0);
            waterTrapped += curHeight;
        }

        return waterTrapped;
    }
}
