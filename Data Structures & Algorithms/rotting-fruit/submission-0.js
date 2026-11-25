class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0;
        let minutes = 0;
        let queue = [];

        // get first queue and check nos of fresh
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == 2) queue.push([r, c]);
                else if (grid[r][c] == 1) fresh++;
            }
        }

        while (queue.length && fresh) {
            // start bfs - minutes/level by minutes
            const curMinLen = queue.length;
            for (let n = 0; n < curMinLen; n++) {
                const [r, c] = queue.shift();

                for (const [dr, dc] of DIRS) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (grid[nr]?.[nc] !== 1) continue;

                    // rotten
                    grid[nr][nc] = 2;
                    fresh--;
                    // add to queue to rot others
                    queue.push([nr, nc]);
                }
            }
            minutes++; // after each minute ends, count
        }

        return fresh ? -1 : minutes;
    }
}

const DIRS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];
//
