class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        
        arr2.sort()
        count = 0
        
        for x in arr1:
            idx = bisect.bisect_left(arr2, x)
            
            closest = float('inf')
            if idx < len(arr2):
                closest = min(closest, abs(x - arr2[idx]))
            if idx > 0:
                closest = min(closest, abs(x - arr2[idx - 1]))
            
            if closest > d:
                count += 1
        
        return count