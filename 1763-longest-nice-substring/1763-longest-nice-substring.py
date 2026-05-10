class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        if len(s) < 2:
            return ""
        
        seen = set(s)
        for i, char in enumerate(s):

            if char.swapcase() not in seen:
                prefix = self.longestNiceSubstring(s[:i])
                sufix = self.longestNiceSubstring(s[i + 1: ])

                return max(prefix, sufix, key=len)

        return s