from collections import Counter
class Solution:
    def frequencySort(self, s: str) -> str:
        freq = Counter(s)
        sorted_str = sorted(freq.keys(), key=lambda c: freq[c] , reverse=True)

        res = []
        for char in sorted_str:
            res.append(char * freq[char])

        return ''.join(res)