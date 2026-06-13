class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        maximum = sum(accounts[0])
        for i in range(len(accounts)):
            curr_sum = sum(accounts[i])
            if curr_sum > maximum:
                maximum = curr_sum

        return maximum