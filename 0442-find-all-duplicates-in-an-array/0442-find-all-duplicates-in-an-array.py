class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []
        for num in nums:
            indx = abs(num) - 1

            if nums[indx] < 0:
                res.append(abs(num))

            nums[indx] = -nums[indx]
        return res