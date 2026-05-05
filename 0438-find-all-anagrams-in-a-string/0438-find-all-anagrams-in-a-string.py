class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        result = []
        len_s, len_p = len(s), len(p)
        
        if len_s < len_p:
            return result
        
        p_count = Counter(p)
        window_count = Counter(s[:len_p])
        
        if p_count == window_count:
            result.append(0)
        
        for i in range(len_p, len_s):
            window_count[s[i]] += 1
            
            left_char = s[i - len_p]
            window_count[left_char] -= 1
            if window_count[left_char] == 0:
                del window_count[left_char]
            
            if p_count == window_count:
                result.append(i - len_p + 1)
        
        return result

