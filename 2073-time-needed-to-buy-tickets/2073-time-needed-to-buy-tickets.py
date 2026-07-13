class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        time = 0
        target = tickets[k]
        
        for i, t in enumerate(tickets):
            if i <= k:
                time += min(t, target)
            else:
                time += min(t, target - 1)
        
        return time