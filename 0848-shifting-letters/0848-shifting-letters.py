class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        n = len(s)
        result = []
        total = 0
        
        for i in range(n-1, -1, -1):
            total = (total + shifts[i]) % 26
            new_char = chr((ord(s[i]) - ord('a') + total) % 26 + ord('a'))
            result.append(new_char)
        
        return ''.join(reversed(result))