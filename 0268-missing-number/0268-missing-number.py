class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)

        total_expected = n*(n+1)//2
        curr_total = sum(nums)
        
        return total_expected - curr_total