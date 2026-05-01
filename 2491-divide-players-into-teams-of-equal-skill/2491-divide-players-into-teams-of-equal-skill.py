class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        n = len(skill)
        left = 0
        right = n - 1
        skill.sort()
        total_chem = 0
        target = skill[left] + skill[right]
        while left < right:
            pairs = skill[left] + skill[right]
            if pairs != target:
                return -1

            chem = skill[left] * skill[right]
            total_chem += chem

            left += 1
            right -= 1

        return total_chem