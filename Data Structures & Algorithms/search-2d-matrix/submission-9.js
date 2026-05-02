class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // one-pass binary search
        const ROWS = matrix.length; // 4
        const COLS = matrix[0].length; // 3

        let l = 0;
        let r = ROWS * COLS - 1;

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            let rowIdx = Math.floor(m / COLS);
            let colIdx = m % COLS;
            console.log(l, r);
            console.log(m, rowIdx, colIdx);

            if (matrix[rowIdx][colIdx] === target) {
                return true;
            } else if (matrix[rowIdx][colIdx] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}
