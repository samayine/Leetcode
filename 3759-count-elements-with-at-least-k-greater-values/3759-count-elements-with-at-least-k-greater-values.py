class Solution:
    def countElements(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if k == 0:
            return n
        
        nums.sort()
        boundary = nums[n - k]
        count = 0
        
        for i in range(n - k):
            if nums[i] < boundary:
                count += 1
        
        return count