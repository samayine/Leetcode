class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        pairs = zip(heights, names)

        sorted_pairs = sorted(pairs, reverse=True)
        result = [name for height, name in sorted_pairs]

        return result