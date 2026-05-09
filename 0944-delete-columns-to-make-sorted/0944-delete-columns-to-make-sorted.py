class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        if not strs:
            return 0

        del_col = 0
        num_row = len(strs)
        num_col = len(strs[0])

        for col in range(num_col):
            for row in range(num_row - 1):
                if strs[row][col] > strs[row + 1][col]:
                    del_col += 1
                    break

        return del_col