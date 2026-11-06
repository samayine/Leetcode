class Solution:
    def specialArray(self, nums: list[int]) -> int:
        nums.sort()
        n = len(nums)
        prev = -1
        
        for i, num in enumerate(nums):
            count = n - i
            if num >= count and count > prev:
                return count
            prev = num
        
        return -1