class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let lMax = height[l];
        let rMax = height[r];

        let waterTrapped = 0;
        while (l < r) {
            if (lMax < rMax) {
                l++;
                lMax = Math.max(lMax, height[l]);
                waterTrapped += lMax - height[l];
            } else {
                r--;
                rMax = Math.max(rMax, height[r]);
                waterTrapped += rMax - height[r];
            }
        }

        return waterTrapped;
    }
}
