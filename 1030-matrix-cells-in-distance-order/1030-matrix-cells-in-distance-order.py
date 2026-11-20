class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> list[list[int]]:
        cells = []
        for r in range(rows):
            for c in range(cols):
                dist = abs(r - rCenter) + abs(c - cCenter)
                cells.append((dist, r, c))
        
        cells.sort(key=lambda x: x[0])
        return [[r, c] for _, r, c in cells]