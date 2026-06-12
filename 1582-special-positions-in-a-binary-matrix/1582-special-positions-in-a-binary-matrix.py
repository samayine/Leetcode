class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        m = len(mat)
        n = len(mat[0])
        
        row_sum = [0] * m
        for i in range(m):
            row_sum[i] = sum(mat[i])
        
        col_sum = [0] * n
        for j in range(n):
            total = 0
            for i in range(m):
                total += mat[i][j]
            col_sum[j] = total
        
        count = 0
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 1 and row_sum[i] == 1 and col_sum[j] == 1:
                    count += 1
        
        return count