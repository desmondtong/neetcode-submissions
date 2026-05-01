class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // area = height[i] + (rIdx - lIdx - 1)
        // rIdx: first el to the right that is higher
        // lIdx: first el to the left that is higher

        let lBound = new Array(heights.length).fill(-1);
        let rBound = new Array(heights.length).fill(heights.length);

        // find left boundaries
        let lStack = [];
        for (let i = 0; i < heights.length; i++) {
            while (lStack.length && heights[i] <= heights[lStack[lStack.length - 1]]) {
                lStack.pop();
            }
            if (lStack.length) lBound[i] = lStack[lStack.length - 1];

            lStack.push(i);
        }
        console.log(lBound);

        // find right boundaries
        let rStack = [];
        for (let i = heights.length - 1; i >= 0; i--) {
            while (rStack.length && heights[i] <= heights[rStack[rStack.length - 1]]) {
                rStack.pop();
            }
            if (rStack.length) rBound[i] = rStack[rStack.length - 1];

            rStack.push(i);
        }
        console.log(rBound);

        // calculate largest
        let res = 0;
        for (let i = 0; i < heights.length; i++) {
            const area = heights[i] * (rBound[i] - lBound[i] - 1);
            res = Math.max(res, area);
        }

        return res;
    }
}
