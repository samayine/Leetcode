class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = {}
        res = 0

        for num in nums:
            res += count.get(num, 0)
            count[num] = count.get(num, 0) + 1

        return res