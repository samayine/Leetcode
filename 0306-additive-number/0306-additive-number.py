class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
        n = len(num)
        
        for i in range(1, n):
            if num[0] == '0' and i > 1:
                break
            first = int(num[:i])
            
            for j in range(i + 1, n):
                if num[i] == '0' and j - i > 1:
                    break
                second = int(num[i:j])
                
                if self._verify(num, j, first, second):
                    return True
        
        return False
    
    def _verify(self, num: str, pos: int, first: int, second: int) -> bool:
        n = len(num)
        
        while pos < n:
            third = first + second
            third_str = str(third)
            
            if not num.startswith(third_str, pos):
                return False
            
            pos += len(third_str)
            first, second = second, third
        
        return True