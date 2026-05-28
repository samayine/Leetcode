class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        curr = 0
        max_alt = 0

        for g in gain:
            curr += g
            max_alt = max(curr, max_alt)

        return max_alt