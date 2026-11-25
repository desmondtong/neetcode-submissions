from collections import deque

DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]]


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        fresh = 0
        minutes = 0
        queue = deque([])

        # initialise first queue & count fresh
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 2:
                    queue.append([r, c])
                elif grid[r][c] == 1:
                    fresh += 1
        # print(f"initialsed: {fresh=}, {queue=}")

        while queue and fresh:
            # bfs on queue, minute by minute
            curQueueLen = len(queue)
            for n in range(curQueueLen):
                r, c = queue.popleft()

                for dr, dc in DIRS:
                    nr = r + dr
                    nc = c + dc

                    if not (0 <= nr < len(grid) and 0 <= nc < len(grid[0])) or grid[nr][nc] != 1:
                        continue

                    # rotten
                    grid[nr][nc] = 2
                    fresh -= 1

                    # add to queue to rot others
                    queue.append([nr, nc])

            # count minute after each minute end
            minutes += 1

        return -1 if fresh > 0 else minutes
