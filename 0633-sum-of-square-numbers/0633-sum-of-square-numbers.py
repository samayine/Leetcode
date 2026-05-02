import math
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        left = 0
        right = math.isqrt(c)

        while left <= right:
            sum = left * left + right * right

            if sum == c:
                return True
            elif sum < c:
                left += 1
            else:
                right -= 1

        return False