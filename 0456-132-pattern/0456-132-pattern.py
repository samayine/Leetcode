class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        n = len(nums)
        if n < 3:
            return False
        
        stack = []
        min_s = float('-inf')
        
        for i in range(n - 1, -1, -1):
            if nums[i] < min_s:
                return True
            
            while stack and stack[-1] < nums[i]:
                min_s = stack.pop()
            
            stack.append(nums[i])
        
        return False