class Solution:
    def punishmentNumber(self, n: int) -> int:
        def check(s: str, start: int, target: int) -> bool:
            m = len(s)
            if start == m:
                return target == 0
            
            num = 0
            for i in range(start, m):
                num = num * 10 + int(s[i])
                if num > target:
                    break
                if check(s, i + 1, target - num):
                    return True
            return False
        
        ans = 0
        for i in range(1, n + 1):
            square = i * i
            if check(str(square), 0, i):
                ans += square
        return ans