class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m = len(grid)
        n = len(grid[0])
        total = m*n

        k = k % total

        if k==0:
            return grid

        flat = []
        for row in grid:
            flat.extend(row)

        shifted = flat[-k:] + flat[:-k]

        result = []
        for i in range(0, total, n):
            result.append(shifted[i:i+n])

        return result