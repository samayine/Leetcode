class Solution:
    def tictactoe(self, moves: list[list[int]]) -> str:
        board = [[None] * 3 for _ in range(3)]
        
        def winner(player):
            for r in range(3):
                if all(board[r][c] == player for c in range(3)):
                    return True
            for c in range(3):
                if all(board[r][c] == player for r in range(3)):
                    return True
            if all(board[i][i] == player for i in range(3)):
                return True
            if all(board[i][2 - i] == player for i in range(3)):
                return True
            return False
        
        for i, (r, c) in enumerate(moves):
            player = "A" if i % 2 == 0 else "B"
            board[r][c] = player
            if winner(player):
                return player
        
        return "Draw" if len(moves) == 9 else "Pending"

