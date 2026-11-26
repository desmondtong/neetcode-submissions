class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0;
        let queue = [];

        // initialise a queue with rotten
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == 2) queue.push([r, c]);
                else if (grid[r][c] == 1) fresh++;
            }
        }
        console.log({ queue });
        if (!queue.length && !fresh) return 0;

        let minutes = -1;
        let head = 0;
        // bfs level by level - minutes
        while (head < queue.length) {
            const curLevelLen = queue.length;
            // console.log({ queue });
            for (let n = head; n < curLevelLen; n++) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of DIRS) {
                    const [nr, nc] = [r + dr, c + dc];
                    if (
                        0 <= nr &&
                        nr < grid.length &&
                        0 <= nc &&
                        nc < grid[0].length &&
                        grid[nr][nc] == 1
                    ) {
                        // rotten it
                        grid[nr][nc] = 2;
                        queue.push([nr, nc]);

                        fresh--;
                    }
                }
            }

            minutes++;
        }

        return fresh > 0 ? -1 : minutes;
    }
}

const DIRS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];
