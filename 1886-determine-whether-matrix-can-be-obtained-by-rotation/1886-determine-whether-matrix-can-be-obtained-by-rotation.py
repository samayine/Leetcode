class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        n = len(mat)
        
        if mat == target:
            return True
        
        for _ in range(3):
            mat = self.rotate90(mat)
            if mat == target:
                return True
        
        return False
    
    def rotate90(self, mat: List[List[int]]) -> List[List[int]]:
        n = len(mat)
        rotated = [[0] * n for _ in range(n)]
        
        for i in range(n):
            for j in range(n):
                rotated[j][n - 1 - i] = mat[i][j]
        
        return rotated