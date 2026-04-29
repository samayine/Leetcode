class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        n = len(nums)
        res = []
        for i in range(n):
            if i > 0 and nums[i] == nums[i-1]:
                continue

            left = i+1
            right = n-1
            target = -nums[i]
            while left<right:
                curr_sum = nums[left] + nums[right]

                if curr_sum < target:
                    left += 1
                elif curr_sum > target:
                    right -= 1
                else:
                    res.append([nums[i], nums[left], nums[right]])

                    while left < right and nums[left] == nums[left+1]:
                        left += 1
                    while left < right and nums[right] == nums[right -1]:
                        right -= 1
                    
                    left += 1
                    right -= 1
        return res
