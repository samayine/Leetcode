class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        sum = 0
        for i in range(len(mat)):
            sum += mat[i][i]

            j = len(mat)-1-i
            if i != j:
                sum += mat[j][i]

        return sum