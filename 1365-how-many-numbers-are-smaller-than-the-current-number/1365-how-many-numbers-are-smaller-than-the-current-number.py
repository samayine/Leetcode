class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        sorted_nums = sorted(nums)

        freq = {}

        for i, num in enumerate(sorted_nums):
            if num not in freq:
                freq[num] = i

        return [ freq[num] for num in nums]