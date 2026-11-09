class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const row = grid.length;
        const col = grid[0].length;

        function dfs(r, c, key) {
            seen.add(key);

            // compute neighbours dirs
            const dirs = [
                [r, c - 1],
                [r, c + 1],
                [r - 1, c],
                [r + 1, c],
            ];
            // console.log(key, { dirs });
            for (const [nr, nc] of dirs) {
                // boundary check
                if (nr < 0 || nr > row - 1 || nc < 0 || nc > col - 1) continue;

                // not seen and is island
                const nKey = `${nr}-${nc}`;
                // console.log({ nKey });
                if (!seen.has(nKey) && grid[nr][nc] == "1") dfs(nr, nc, nKey);
            }
        }

        // dfs to count nos of island
        const seen = new Set();
        let count = 0;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                const key = `${r}-${c}`;
                if (!seen.has(key) && grid[r][c] == "1") {
                    dfs(r, c, key);
                    count++;
                }
            }
        }

        return count;
    }
}
