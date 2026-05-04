class Solution:
    def findLHS(self, nums: List[int]) -> int:
        count = {}
        maximum = 0
        for num in nums:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1
                

        for n in count:
            if n+1 in count:
                curr_length = count[n] + count[n+1]
                maximum = max(maximum, curr_length)

        return maximum