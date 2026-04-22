class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowsMap = new Map();
        const colsMap = new Map();
        const squaresMap = new Map();

        // create map
        for (let row = 0; row < board.length; row++) {
            const curRow = board[row];
            for (let col = 0; col < curRow.length; col++) {
                const curNumber = curRow[col];
                if (curNumber == ".") continue;

                // set into rows map
                const rowSet = rowsMap.get(row) || new Set();
                if (rowSet.has(curNumber)) return false;
                rowSet.add(curNumber);
                rowsMap.set(row, rowSet);

                // set into col map
                const colSet = colsMap.get(col) || new Set();
                if (colSet.has(curNumber)) return false;
                colSet.add(curNumber);
                colsMap.set(col, colSet);

                // set in square map
                const squareIdx = `${Math.floor(row/3)}-${Math.floor(col/3)}`
                const squareSet = squaresMap.get(squareIdx) || new Set();
                if (squareSet.has(curNumber)) return false;
                squareSet.add(curNumber);
                squaresMap.set(squareIdx, squareSet);
            }
        }

        console.log(squaresMap);
        return true

    }
}
