class Solution:
    def distributeCookies(self, cookies: list[int], k: int) -> int:
        cookies.sort(reverse=True)
        n = len(cookies)
        
        children = [0] * k
        self.best = float('inf')
        
        def backtrack(idx: int, current_max: int) -> None:
            if current_max >= self.best:
                return
            
            if idx == n:
                self.best = min(self.best, current_max)
                return
            
            seen_sums = set()
            for i in range(k):
                if children[i] in seen_sums:
                    continue
                seen_sums.add(children[i])
                
                children[i] += cookies[idx]
                backtrack(idx + 1, max(current_max, children[i]))
                children[i] -= cookies[idx]

                if children[i] == 0:
                    break
        
        backtrack(0, 0)
        return self.best