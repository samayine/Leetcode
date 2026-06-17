class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    r, c = i, j
                    break
            else:
                continue
            break
        
        count = 0
        
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        
        for dr, dc in directions:
            row = r + dr
            col = c + dc
            
            while 0 <= row < 8 and 0 <= col < 8:
                if board[row][col] == 'p':
                    count += 1
                    break
                elif board[row][col] == 'B':
                    break
                row += dr
                col += dc
        
        return count