class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        n = len(colors)
        
        i = 0
        j = n - 1
        while colors[i] == colors[j]:
            j -= 1
        dist1 = j - i
        
        i = 0
        j = n - 1
        while colors[i] == colors[j]:
            i += 1
        dist2 = j - i
        
        return max(dist1, dist2)