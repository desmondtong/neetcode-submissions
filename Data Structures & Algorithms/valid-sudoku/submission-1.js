class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map = new Map();

        // create hast table
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (board[row][col] == ".") continue;

                if (!map.get(`R${row}`)) map.set(`R${row}`, []);
                if (!map.get(`C${col}`)) map.set(`C${col}`, []);

                map.get(`R${row}`).push(board[row][col]);
                map.get(`C${col}`).push(board[row][col]);

                // square map

                if (!map.get(`S${getSquareIdx(row)}${getSquareIdx(col)}`))
                    map.set(`S${getSquareIdx(row)}${getSquareIdx(col)}`, []);
                map.get(`S${getSquareIdx(row)}${getSquareIdx(col)}`).push(board[row][col]);
            }
        }
        // console.log(map);

        // check all
        for (const [k, v] of map) {
            if (v.length != new Set(v).size) return false;
        }

        return true;
    }
}

function getSquareIdx(num) {
    const div = 9 / (Number(num) + 1);

    if (div <= 9 / 7) {
        return 3;
    } else if (div <= 9 / 4) {
        return 2;
    } else {
        return 1;
    }
}
