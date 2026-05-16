class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        min_len = min(len(s) for s in strs)
        for i in range(min_len):
            curr_char = strs[0][i]

            for s in strs[1:]:
                if s[i] != curr_char:
                    return strs[0][:i]

        return strs[0][:min_len]
