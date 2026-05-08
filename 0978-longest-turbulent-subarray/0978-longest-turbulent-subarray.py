class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        n = len(arr)
        if n<2:
            return n

        curr_len = 1
        max_len = 1
        last_sign = 0
        for i in range(1,n):
            if arr[i-1] - arr[i] > 0:
                curr_sign = 1
            elif arr[i-1] - arr[i] < 0:
                curr_sign = -1

            else:
                curr_sign = 0

            if curr_sign == 0:
                curr_len = 1
            elif curr_sign == last_sign:
                curr_len = 2
            else:
                curr_len += 1

            last_sign = curr_sign

            max_len = max(max_len, curr_len)

        return max_len