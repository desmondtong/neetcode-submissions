from collections import deque

DIRS = ((1, 0), (0, 1), (-1, 0), (0, -1))


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rowNum = len(grid)
        colNum = len(grid[0])

        fresh = 0
        minute = 0
        queue = deque([])

        # initalise rotten queue
        for r in range(rowNum):
            for c in range(colNum):
                if grid[r][c] == 2:
                    queue.append((r, c))
                elif grid[r][c] == 1:
                    fresh += 1

        while queue and fresh > 0:
            curLevelLen = len(queue)
            print(f"{fresh=} {queue=}")

            for n in range(curLevelLen):
                r, c = queue.popleft()

                for dr, dc in DIRS:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < rowNum and 0 <= nc < colNum and grid[nr][nc] == 1:
                        # rotten the fruit
                        grid[nr][nc] = 2
                        queue.append((nr, nc))

                        fresh -= 1

            # print(*grid, sep="\n")
            minute += 1

        return -1 if fresh > 0 else minute
