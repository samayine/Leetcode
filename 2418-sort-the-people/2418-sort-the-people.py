class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        pairs = []
        for i in range(len(names)):
            pairs.append((heights[i], names[i]))

        pairs.sort(reverse=True)

        return [name for height, name in pairs]