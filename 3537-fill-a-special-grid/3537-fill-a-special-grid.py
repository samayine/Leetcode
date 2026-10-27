class Solution:
    def specialGrid(self, n: int) -> List[List[int]]:
        m = 1 << n
        ans = [[0] * m for _ in range(m)]
        val = 0
        
        def dfs(x: int, y: int, k: int):
            nonlocal val
            if k == 1:
                ans[x][y] = val
                val += 1
                return
            h = k // 2
            dfs(x, y, h)
            dfs(x + h, y, h)
            dfs(x + h, y - h, h)
            dfs(x, y - h, h)
        
        dfs(0, m - 1, m)
        return ans