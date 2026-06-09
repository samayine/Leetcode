class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        curr_pos = 0
        bound = 0

        for move in nums:
            curr_pos += move

            if curr_pos == 0:
                bound += 1

        return bound
