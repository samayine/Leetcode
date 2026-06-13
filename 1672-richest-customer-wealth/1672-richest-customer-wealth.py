class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        maximum = sum(accounts[0])
        for i in range(1 , len(accounts)):
            maximum = max(maximum,sum(accounts[i]))

        return maximum