class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last_occurrence = {}
        for i, char in enumerate(s):
            last_occurrence[char] = i
            
        result = []
        start = 0
        max_last = 0
        
        for i, char in enumerate(s):
            max_last = max(max_last, last_occurrence[char])
            
            if i == max_last:
                result.append(i - start + 1)
                start = i + 1
        
        return result