class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // find which row to do binary search
        let l = 0;
        let r = matrix.length - 1;
        let m = -1;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if (l == r) break;

            if (matrix[m][matrix[m].length - 1] === target) {
                break;
            } else if (matrix[m][matrix[m].length - 1] > target) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        if (m == -1) return false;

        const targetedRow = matrix[m];
        console.log({ targetedRow });

        // do b.search on the targeted row
        l = 0;
        r = targetedRow.length - 1;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            console.log(l, r, m);

            if (targetedRow[m] === target) {
                return true;
            } else if (targetedRow[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}
