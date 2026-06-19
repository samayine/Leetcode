class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        
        for i in range(n):
            row_set = set()
            for j in range(n):
                num = matrix[i][j]
                if num < 1 or num > n or num in row_set:
                    return False
                row_set.add(num)
            if len(row_set) != n:
                return False
        
        for j in range(n):
            col_set = set()
            for i in range(n):
                num = matrix[i][j]
                if num < 1 or num > n or num in col_set:
                    return False
                col_set.add(num)
            if len(col_set) != n:
                return False
        
        return True