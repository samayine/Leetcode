class Solution:
    def generateValidStrings(self, n: int, k: int) -> list[str]:
        result = []
        
        def backtrack(index: int, current_cost: int, path: List[str]):
            if index == n:
                result.append("".join(path))
                return
            
            path.append('0')
            backtrack(index + 1, current_cost, path)
            path.pop()
            
           
            prev_char = path[-1] if path else None
            if prev_char != '1' and current_cost + index <= k:
                path.append('1')
                backtrack(index + 1, current_cost + index, path)
                path.pop()
        
        backtrack(0, 0, [])
        return result