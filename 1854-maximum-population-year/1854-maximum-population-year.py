class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        delta = defaultdict(int)
        
        for birth, death in logs:
            delta[birth] += 1
            delta[death] -= 1
        
        max_pop = 0
        max_year = 1950
        current_pop = 0
        
        for year in sorted(delta.keys()):
            current_pop += delta[year]
            if current_pop > max_pop:
                max_pop = current_pop
                max_year = year
        
        return max_year