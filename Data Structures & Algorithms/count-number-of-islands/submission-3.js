class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const graph = new Map();

        const row = grid.length;
        const col = grid[0].length;

        // create graph
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                let curPoint = `${r}-${c}`;
                // console.log({ curPoint });

                if (grid[r][c] == "0") continue;

                // check self
                if (grid[r][c] == "1" && !graph.get(curPoint)) graph.set(curPoint, new Set());

                // check 4 directions
                // create map for self and neighbours
                if (c > 0 && grid[r][c - 1] == "1") {
                    const addPoint = `${r}-${c - 1}`;
                    addGraphPoints(graph, addPoint, curPoint);
                }
                if (c < col - 1 && grid[r][c + 1] == "1") {
                    const addPoint = `${r}-${c + 1}`;
                    addGraphPoints(graph, addPoint, curPoint);
                }
                if (r > 0 && grid[r - 1][c] == "1") {
                    const addPoint = `${r - 1}-${c}`;
                    addGraphPoints(graph, addPoint, curPoint);
                }
                if (r < row - 1 && grid[r + 1][c] == "1") {
                    const addPoint = `${r + 1}-${c}`;
                    addGraphPoints(graph, addPoint, curPoint);
                }
            }
        }
        // console.log({ graph });

        function dfs(key) {
            seen.add(key);

            for (const j of graph.get(key)) {
                if (!seen.has(j)) dfs(j);
            }
        }

        // dfs to count nos of island
        const seen = new Set();
        const keys = [...graph.keys()];

        let count = 0;
        for (let i = 0; i < keys.length; i++) {
            if (!seen.has(keys[i])) {
                console.log("checking key:", keys[i]);
                dfs(keys[i]);
                count++;
            }
        }

        return count;
    }
}

function addGraphPoints(graph, addPoint, curPoint) {
    // console.log("====:", { addPoint });
    if (!graph.get(addPoint)) graph.set(addPoint, new Set());
    if (!graph.get(curPoint)) graph.set(curPoint, new Set());

    graph.get(curPoint).add(addPoint);
    graph.get(addPoint).add(curPoint);
}
